import { Router } from 'express';
import { db } from '../helpers/firestore';

const router = Router();

// POST /events – create new event
router.post('/events', async (req, res) => {
  const { title, description, date, location, createdBy } = req.body;

  if (!title || !date || !createdBy) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newEvent = {
      title,
      description: description || '',
      date,
      location: location || '',
      createdBy,
      createdAt: new Date().toISOString(),
    };

    const docRef = await db.collection('events').add(newEvent);

    res.status(201).json({ id: docRef.id, ...newEvent });
  } catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /events/:eventId/rsvp – get RSVPs for an event
router.get('/events/:eventId/rsvp', async (req, res) => {
  const { eventId } = req.params;

  try {
    const snapshot = await db
      .collection('events')
      .doc(eventId)
      .collection('rsvps')
      .get();

    const rsvps = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(rsvps);
  } catch (err) {
    console.error('Error fetching RSVPs:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;