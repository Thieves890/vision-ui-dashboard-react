import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function MissionsPage() {
  const [points, setPoints] = useState(0);
  useEffect(() => {
    supabase
      .from('user_points')
      .select('points')
      .eq('user_id', supabase.auth.user().id)
      .then(({ data }) => setPoints(data?.[0]?.points || 0));
  }, []);
  return <div>Your current points: {points}</div>
}
