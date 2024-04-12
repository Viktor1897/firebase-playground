import { useState } from 'react';
import './App.css'
import usePutData from './firebase/usePutData';
import useGetData from './firebase/useGetData';

type Task = {
  id: string;
  name: string;
  description: string;
}

function App() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const { putData } = usePutData();
  const { data: tasks, refetch: refetchTasks } = useGetData<Task>('tasks');
  console.log(tasks);
  const clearInputs = () => {
    setTaskName('');
    setTaskDescription('');
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Название задачи:', taskName);
    console.log('Описание:', taskDescription);
    putData('tasks', { name: taskName, description: taskDescription }).then(() => {
      clearInputs();
      refetchTasks();
    });
  }

  return (
    <>
      <header className="app-header">
        <h1 className="app-header__title">
          Todo List
        </h1>
      </header>
      <main className="app-main">
        <section className="task-section">
        <div className="task-section__container">
          <div className="task-creation">
          <h2 className="task-creation__title">Создание задачи</h2>
            <form className="task-form" onSubmit={handleSubmit}>
              <label className="task-form__label" htmlFor="taskName">Название задачи:</label>
              <input className="task-form__input" type="text" id="taskName" name="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
              <label className="task-form__label" htmlFor="taskDescription">Описание:</label>
              <textarea className="task-form__textarea" id="taskDescription" name="taskDescription" rows={4} value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} required></textarea>
              <button className="task-form__button" type="submit">Добавить задачу</button>
            </form>
          </div>
          <div className="task-list">
            <h2 className="task-list__title">Колонка 2</h2>
            {tasks.map((task) => (
              <div className="task-list__item" key={task.id}>
                <h3 className="task-list__item-title">{task.name}</h3>
                <p className="task-list__item-description">{task.description}</p>
              </div>
            ))}
          </div>
        </div>
        </section>
      </main>
    </>
  )
}

export default App
