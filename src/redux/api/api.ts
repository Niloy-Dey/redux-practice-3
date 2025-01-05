// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
      getTodos: builder.query({
        query: (name) => ({
            url: '/todos',
            method: 'GET',

        }),
      }),
      addTodos: builder.mutation({
        query: (data) => ({
            url: '/todo',
            method: 'POST',
            body: data,
        }),
      }),
    }),
})

export const {useGetTodosQuery, useAddTodosMutation} = baseApi;