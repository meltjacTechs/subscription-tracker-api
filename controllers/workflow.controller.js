import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { serve } = require('@upstash/workflow/express');

export const sendReminders = serve(async (context) =>{
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription( context,subscriptionId );

    if(!subscription || subscription.status !== active) return;

    const renewalDate = new
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    })
}