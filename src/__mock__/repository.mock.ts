import { Repository } from '../interface/repository.interface';

const numberOfItems = Array.from(Array(5).keys());

export const repositorySearchResultsMock: Repository[] = numberOfItems.map((id) => ({
  id,
  title: `item-title-${id}`,
  content: `item-content-${id}`,
  starCount: 0,
}));
