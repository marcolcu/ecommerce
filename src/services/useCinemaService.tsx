

import { IFetchData, useGetData } from "@/hooks/useGetData";
import usePostData, { IPostData } from "@/hooks/usePostData";

export const useListCinema = () => {
    const { postData, data, loading, status, error, isError } = usePostData();

    return {
        fetchListCinema: ({ header, option, queryParams }: IFetchData) =>
            postData({
                urlPath: "api/v1/flix/Cinemas/GetList",
                header: header,
                option: option,
                queryParams: queryParams,
                body: {
                    actionby: process.env.NEXT_PUBLIC_ACTION_BY,
                    ipaddress: "192:1.1.1",
                    apikey: process.env.NEXT_PUBLIC_API_KEY,
                    signature: process.env.NEXT_PUBLIC_SIGNATURE,
                },
            }),
        listCinema: data,
        listCinemaLoading: loading,
        listCinemaStatus: status,
        listCinemaError: error || data?.message,
        listCinemaIsError: isError || data?.status == '1',
    };
};

export const useGetCinema = () => {
    const { fetchData, data, message, loading, status, error, isError } = useGetData();

    return {
        fetchCinema: ({ header, option, queryParams }: IFetchData) =>
            fetchData({
                urlPath: "api/v1/product/get-by-username/flixcinema",
                header: header,
                option: option,
                queryParams: queryParams,
            }),
        cinema: data,
        cinemaMessage: message,
        cinemaLoading: loading,
        cinemaStatus: status,
        cinemaError: error || data?.message,
        cinemaIsError: isError,
    };
};

export const useCinemaDetail = () => {
    const { postData, data, loading, status, error, isError } = usePostData();

    return {
        fetchCinemaDetail: ({ header, option, queryParams, body }: IPostData) =>
            postData({
                urlPath: "api/v1/flix/Cinemas/GetDetail",
                header: header,
                option: option,
                queryParams: queryParams,
                body: {
                    actionby: process.env.NEXT_PUBLIC_ACTION_BY,
                    ipaddress: "192:1.1.1",
                    apikey: process.env.NEXT_PUBLIC_API_KEY,
                    signature: process.env.NEXT_PUBLIC_SIGNATURE,
                    ...body
                },
            }),
        cinema: data,
        cinemaLoading: loading,
        cinemaStatus: status,
        cinemaError: error || data?.message,
        cinemaIsError: isError || data?.status == '1',
    };
};