import { onRequest } from 'firebase-functions/v2/https';

exports.upsertHolidaysData = onRequest({
    region: 'asia-northeast3',
}, async (req, res) => {
   try {

   } catch (err) {
     console.error(err);
   }
});