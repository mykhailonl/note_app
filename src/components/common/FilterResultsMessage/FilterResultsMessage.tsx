import { FilterResultsMessageProps } from '../../../types/Messages/Messages.ts';

export const FilterResultsMessage = ({ query, tags }: FilterResultsMessageProps) => {
  if (query) {
    return (
      <div className="text-preset-5 text-text-secondary flex self-stretch">
        All notes matching ”<span className="text-text-primary">{query}</span>” are displayed below.
      </div>
    );
  }

  return (
    <div className="text-preset-5 text-text-secondary flex self-stretch">
      All notes with the ”<span className="text-text-primary">{tags}</span>” tag are shown here.
    </div>
  );
};
