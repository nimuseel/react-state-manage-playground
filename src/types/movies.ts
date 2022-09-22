export interface Movies {
  date: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  pageCount: number;
  totalResults: number;
}

export interface Movie {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
