'use client'

import { useEffect, useState } from 'react'

interface Task {
  id: number
  title: string
  completed: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')

  const fetchTasks = async () => {
    const res = await fetch('/api/tasks')
    const data = await res.json()
    setTasks(data)
  }

  const addTask = async () => {
    if (!title.trim()) return
    const res = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({ title }),
    })
    const newTask = await res.json()
    setTasks(prev => [newTask, ...prev])
    setTitle('')
  }

  const toggleTask = async (task: Task) => {
    await fetch(`/api/tasks/${task.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: !task.completed }),
    })
    fetchTasks()
  }

  const deleteTask = async (id: number) => {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' })
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Task Manager</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task"
          className="border p-2 flex-1"
        />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
          >
            <span
              className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
              onClick={() => toggleTask(task)}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
