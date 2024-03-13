const baseUrl = "https://tools.texoit.com/backend-java/api/movies";

export const listMovies = async (page: string, size: string, winner: string, year: string): Promise<any> => {
    const queryParams = new URLSearchParams({
        page: page,
        size: size,
        winner: winner,
        year: year
    });

    const url = `${baseUrl}?${queryParams.toString()}`;

    const response = await fetch(url);
    return response.json();
};

export const yearsWithMultipleWinners = async (): Promise<any> => {
    const queryParams = new URLSearchParams({
        projection: "years-with-multiple-winners",
    });

    const url = `${baseUrl}?${queryParams.toString()}`;

    const response = await fetch(url);
    return response.json();
};

export const studiosWithWinCount = async (): Promise<any> => {
    const queryParams = new URLSearchParams({
        projection: "studios-with-win-count",
    });

    const url = `${baseUrl}?${queryParams.toString()}`;

    const response = await fetch(url);
    return response.json();
};

export const maxMinWinIntervalForProducers = async (): Promise<any> => {
    const queryParams = new URLSearchParams({
        projection: "max-min-win-interval-for-producers"
    });

    const url = `${baseUrl}?${queryParams.toString()}`;

    const response = await fetch(url);
    return response.json();
};

export const movieWinnerByYear = async (year: string): Promise<any> => {
    const queryParams = new URLSearchParams({
        winner: "true",
        year: year
    });

    const url = `${baseUrl}?${queryParams.toString()}`;

    const response = await fetch(url);
    return response.json();
};
