import { Button } from "./Button";

interface SIdeBarProps {
  genres: Array<{
    id: number;
    title: string;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  }>;
  handleClickButton: Function;
  selectedGenreId: number;
}

import "../styles/sidebar.scss";

export function SideBar({
  genres,
  handleClickButton,
  selectedGenreId,
}: SIdeBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}