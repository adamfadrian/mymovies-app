type GenreType = {
  id?: number;
  name?: string;
};

type LanguageType = {
  english_name?: string;
};

export interface VideosType {
  id?: string;
  key?: string;
  name?: string;
}

export interface MovieType {
  id?: number;
  backdrop_path?: string;
  poster_path?: string;
  title?: string;
  tagline?: string;
  spoken_languages?: LanguageType[];
  release_date?: string;
  runtime?: number;
  genres?: GenreType[];
  overview?: string;
  videos?: {
    results: VideosType[];
  };
}
