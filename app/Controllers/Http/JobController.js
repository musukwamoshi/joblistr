'use strict'

const Job = use('App/Models/Job');

class JobController {

    //function that pulls all jobs
    async home({ view }) {

        //create new job
        const job = new Job;
        job.title = "Job One";
        job.link = "findjobs.com";
        job.description = "Just a run of the mill job";

        //save job
        await job.save();

        //fetch job
        const jobs = await Job.all();

        //return jobs with async
        return view.render('view.index', { jobs: jobs.toJSON() });

    }




}

module.exports = JobController