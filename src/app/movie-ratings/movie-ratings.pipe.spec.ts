import { MovieRatingsPipe } from './movie-ratings.pipe';

describe('MovieRatingsPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieRatingsPipe();
    expect(pipe).toBeTruthy();
  });
});
