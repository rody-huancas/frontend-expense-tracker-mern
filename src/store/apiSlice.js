import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:4001";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/api/categories`,
    }),
    getLabels: builder.query({
      query: () => `/api/labels`,
    }),
    // add transactions
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        url: `/api/transactions`,
        method: "POST",
        body: initialTransaction,
      }),
    }),
    // delete transactions
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: `/api/transactions`,
        method: "DELETE",
        body: recordId,
      }),
    }),
  }),
});

export default apiSlice;
