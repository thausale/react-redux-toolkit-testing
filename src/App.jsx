import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./assets/store/app";
import {
  useGetAllFriendsQuery,
  usePostFriendMutation,
} from "./assets/store/friendsApi";
import { friendsApi } from "./assets/store/friendsApi";

function App() {
  const { theme } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const { data, isLoading } = friendsApi.useGetAllFriendsQuery();
  return (
    <>
      <main className={theme}>
        <button onClick={() => dispatch(toggleTheme())}>toggle Theme</button>
        <h1>Onze app</h1>
        {data && (
          <ul>
            {data.map((friend) => (
              <li key={friend.id}>{friend.name}</li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
export default App;
