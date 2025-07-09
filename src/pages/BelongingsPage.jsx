// src/pages/BelongingsPage.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function BelongingsPage() {
  const userId = supabase.auth.user().id;
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  const fetchItems = async () => {
    let { data } = await supabase
      .from('belongings')
      .select('*')
      .eq('user_id', userId);
    setItems(data);
  };

  const addItem = async () => {
    await supabase
      .from('belongings')
      .insert({ user_id: userId, name, created_at: new Date() });
    // optionally add points...
    fetchItems();
  };

  useEffect(() => { fetchItems(); }, []);
  return (
    <div>
      <h2>Your Belongings</h2>
      <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
