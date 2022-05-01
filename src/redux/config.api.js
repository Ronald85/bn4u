import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const configApi = createApi({
  reducerPath: "configApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bn4u.net/api"
  }),
  tagTypes: ["Post", "DELETE"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => `/configs/index.php`,
      providesTags: ["Post"]
    }),
    postConfig: builder.mutation({
      query: (obj) => ({
        url: `/configs/index.php`,
        method: "POST",
        body: obj
      }),
      invalidatesTags: ["Post"]
    }),
    deleteConfig: builder.mutation({
      query: (id) => ({
        url: `/configs/index.php`,
        method: "DELETE",
        body: JSON.stringify({ id })
      }),
      invalidatesTags: ["Post"]
    })
  })
});

export const {
  useGetAllQuery,
  usePostConfigMutation,
  useDeleteConfigMutation
} = configApi;
