const moment = require('moment');
const Campaign = require('./campaign');

exports.createCampaign = async (args, res, next) => {
    /**
     * post users' different actions on website content(posts/ collections/ products)
     *
     * body analytics Created user object
     * no response value expected for this operation
     **/
    try {
        // use a standard timestamp format
        const date = moment().format(moment.ISO_8601);
        const {
            username, title, briefdescription, 
            fullbrief, client, budget, 
            startdate, enddate, facebook, 
            instagram, twitter, tumblr, 
            merchantid, imageurl
        } = args.body;

        const campaign = await Campaign.build({
            username, title, briefdescription, 
            fullbrief, client, budget, 
            startdate, enddate, facebook, 
            instagram, twitter, tumblr, 
            merchantid, imageurl
        }).save();

        const response = campaign.get({
            plain: true
        });

        response['daterange'] = {  
            "startdate": campaign.startdate, 
            "enddate": campaign.enddate
        };

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).send(JSON.stringify(response));
    } catch (error) {
        res.status(400).send(error);
    }
}