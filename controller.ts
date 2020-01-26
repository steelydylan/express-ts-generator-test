import { MusicsController } from './@types/expressapi';

export const Get: MusicsController.Get = async (
  req,
  res
): Promise<void> => {

  res.json([{
    id: 1,
    category: 'レゲエ'
  }])
}