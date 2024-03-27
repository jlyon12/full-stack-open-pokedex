# Exercise 11.1

1. **Some common steps in a CI setup include _linting_, _testing_, and _building_. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.**

   - Assuming the project is written in Python … You could utilize flake8 for linting, pytest for testing, a build config file. You could then write scripts to ensure each is ran successfully before deploying from the main branch.

2. **What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!**

   - Some other alternate tools to use for CI are GitLab, Azure DevOps and AWS CodePipeline,

3. **Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?**
   - This is largely dependent on the scope of nature of the project. A small scale project without a lot of specific needs could be easily utilized with a cloud-based environment which would be less expensive and complicated to set up. A larger, more proprietary project could benefit from a self-hosted solution especially when scaling is a concern. A self-hosted process would be beneficial to a company with multiple projects and teams. In this case, a small project of 6 people can likely work fine in a clod-based environment.
