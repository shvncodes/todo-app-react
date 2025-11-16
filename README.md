
`
const todoList = [
    {
        id: "1",
        task: "task",
        description: "",
        isCompleted: true,
        category: "Work",
        createdAt: date
    }
]

const status = ["All", "Pending", "Completed"]
const categories = ["Work", "Personal"];


status: All=> return 
staus: Pending => todo.isCompleted === false
status: Completed => todo.isCompleted === true

`

## Features
- Add, Edit, delete todos
- Mark as completed
- Add Categories
- Filter by All, Completed, Pending
- Filter by Categories
- Local Storage save
- Search functionality
- Drag and Reorder tasks
- Animations using Framer Motion