import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("recipes");
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({ name: "", ingredients: "", steps: "" });
  const [search, setSearch] = useState("");

  // Lưu vào localStorage khi thay đổi
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (e) => {
    e.preventDefault();
    if (!form.name) return;
    setRecipes([...recipes, form]);
    setForm({ name: "", ingredients: "", steps: "" });
  };

  const deleteRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  };

  // Lọc công thức theo nguyên liệu (case-insensitive)
  const filteredRecipes = recipes.filter((r) =>
    r.ingredients.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>📖 Recipe Book</h1>

      {/* Form thêm công thức */}
      <form onSubmit={addRecipe} className="form">
        <input
          type="text"
          placeholder="Tên món ăn"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Nguyên liệu (cách nhau bằng dấu ,)"
          value={form.ingredients}
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
        />
        <textarea
          placeholder="Các bước"
          value={form.steps}
          onChange={(e) => setForm({ ...form, steps: e.target.value })}
        />
        <button type="submit">➕ Thêm công thức</button>
      </form>

      {/* Ô tìm kiếm */}
      <input
        type="text"
        className="search-box"
        placeholder="🔍 Tìm công thức theo nguyên liệu..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Danh sách công thức */}
      <ul className="recipe-list">
        {filteredRecipes.map((r, i) => (
          <li key={i}>
            <h3>{r.name}</h3>
            <p><b>Nguyên liệu:</b> {r.ingredients}</p>
            <p><b>Cách làm:</b> {r.steps}</p>
            <button onClick={() => deleteRecipe(i)}>❌ Xóa</button>
          </li>
        ))}
        {filteredRecipes.length === 0 && <p>😕 Không tìm thấy công thức nào</p>}
      </ul>
    </div>
  );
}

export default App;
