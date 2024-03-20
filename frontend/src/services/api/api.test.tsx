import {
    listMovies,
    yearsWithMultipleWinners,
    studiosWithWinCount,
    maxMinWinIntervalForProducers,
    movieWinnerByYear,
  } from './';
  
  describe('Movie API Service', () => {
    beforeEach(() => {
        const mockResponse = {
          ok: true,
          json: jest.fn().mockResolvedValue({}),
        };
    
        jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse as any);
    });
  
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    test('listMovies function calls fetch with correct URL', async () => {
      await listMovies('1', '10', 'true', '2022');
  
      expect(global.fetch).toHaveBeenCalledWith(
        'https://tools.texoit.com/backend-java/api/movies?page=1&size=10&winner=true&year=2022'
      );
    });
  
    test('yearsWithMultipleWinners function calls fetch with correct URL', async () => {
      await yearsWithMultipleWinners();
  
      expect(global.fetch).toHaveBeenCalledWith(
        'https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners'
      );
    });
  
    test('studiosWithWinCount function calls fetch with correct URL', async () => {
      await studiosWithWinCount();
  
      expect(global.fetch).toHaveBeenCalledWith(
        'https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count'
      );
    });
  
    test('maxMinWinIntervalForProducers function calls fetch with correct URL', async () => {
      await maxMinWinIntervalForProducers();
  
      expect(global.fetch).toHaveBeenCalledWith(
        'https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers'
      );
    });
  
    test('movieWinnerByYear function calls fetch with correct URL', async () => {
      await movieWinnerByYear('2022');
  
      expect(global.fetch).toHaveBeenCalledWith(
        'https://tools.texoit.com/backend-java/api/movies?winner=true&year=2022'
      );
    });
  });
  