// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { expect, test, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import CharacterSearchContainer from './CharacterSearchContainer';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

// mock hook - useCharacterSearch
vi.mock('../hooks/useCharacterSearch', () => ({
  useCharacterSearch: vi.fn(() => [
    {
      id: 1,
      name: 'Luke Skywalker',
      gender: 'male',
      image: null,
      created: null,
    },
    {
      id: 2,
      name: 'Luke2',
      gender: 'female',
      image: null,
      created: null,
    },
  ]),
}));

test('default controls are displayed', () => {
  render(<CharacterSearchContainer />);
  expect(screen.getByText('Sort by')).toBeInTheDocument();
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByText('Gender')).toBeInTheDocument();
});

test('character list is filtered', async () => {
  render(<CharacterSearchContainer />);
  await userEvent.type(screen.getByLabelText('Name'), 'Luke Skywalker');
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});
