import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const friendsApi = createApi({
  reducerPath: "friends",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/vrienden" }),
  endpoints: (builder) => ({
    getAllFriends: builder.query({
      query: () => "",
    }),

    postFriend: builder.mutation({
      query: (friend) => ({
        url: "",
        method: "POST",
        body: friend,
      }),
    }),

    patchFriend: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),

    deleteFriend: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllFriendsQuery, usePostFriendMutation } = friendsApi;
