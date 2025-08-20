import { Router } from 'express';
import { db } from '../helpers/firestore';

const router = Router();

router.post('/events/:eventId/rsvp', async (req, res) => {
  const { eventId } = req.params;
  const { userId, attending, displayName, email, plusOne, comment } = req.body;

  if (!userId || attending === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await db
      .collection('events')
      .doc(eventId)
      .collection('rsvps')
      .doc(userId)
      .set(
        {
          attending,
          displayName,
          email,
          plusOne: !!plusOne,
          comment: comment || '',
          timestamp: new Date().toISOString(),
        },
        { merge: true }
      );

    res.status(200).json({ message: 'RSVP recorded' });
  } catch (err) {
    console.error('RSVP error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;