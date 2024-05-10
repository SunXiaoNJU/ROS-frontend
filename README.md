# README

## run

pnpm dev

## Construct

pnpm build

`@umijs/max` template project requires node version 14 or above! ! For more functions, refer to [Umi Max Introduction](https://umijs.org/docs/max/introduce)

## Function introduction

1. The homepage of the ROS examination system implements the login/registration function

- Users need to log in/register on the homepage before using it. Subsequent functional modules are not open to tourists.
- The remaining modules support clicking [Jump to login] to go to the home page for login/registration operations.
- This app uses 'md5+salt' method to encrypt user passwords to ensure user information security.

2. File upload enables drag-and-drop upload and one-click upload

- Follow the instructions of ‘Upload Instructions’, emphasis: the compressed file name must be your student ID!
- File upload supports drag-and-drop file uploading and one-click uploading, and the upload results will be displayed below.

3. ROS visualization and feedback of running results

- Follow the 'Guide to Use' instructions, upload the completed file first, and then operate the visualization part.
- Upload launch-related content first, wait for the visualization window to be loaded, and then upload navigation-related parts.

4. Data management

- Present uploaded data.

5. Article management

- Publish articles using open source Tinymce.
- Article summary, presenting article title and summary.
