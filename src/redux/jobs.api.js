import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://bn4u.net/api" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => `jobs/index.php`,
      providesTags: ["Post"]
    }),
    getJob: builder.query({
      query: (id) => `jobs/details.php?id=${id}`
    }),
    postJob: builder.mutation({
      query: (obj) => ({
        url: `jobs/index.php`,
        method: "POST",
        body: obj
      }),
      invalidatesTags: ["Post"]
    })
  })
});

export const { useGetAllQuery, useGetJobQuery, usePostJobMutation } = jobsApi;
