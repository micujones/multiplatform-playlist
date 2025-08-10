# Multiplatform Playlist

A multimedia PWA for web and mobile devices built with React, powered by Iframely. The app will provide users with a playlist interface and options to add media from diverse platforms to a playlist, edit and access their saved content, and share playlists.

## Tools

-   ![Static Badge](https://img.shields.io/badge/react-222222?style=for-the-badge&logo=react&logoColor=%2361DAFB)
-   ![Static Badge](https://img.shields.io/badge/iframely-0037fe?style=for-the-badge)
-   ![Static Badge](https://img.shields.io/badge/material_ui-0d0f10?style=for-the-badge&logo=mui&logoColor=007FFF)

## Installation

Clone repo

```sh
gh repo clone micujones/multiplatform-playlist
```

Install dependencies

```sh
npm install
```

## Usage

### Connect to Iframely

You will need an API key from [Iframely](https://iframely.com/signup). After creating an account, the API key will be available in the "Your API access" section of the dashboard. For additional security, this project utilizes the key hash endpoint (i.e., `https://iframe.ly/api/iframely?url={encoded_url}&key={your_key_hash}`).

Add a `.env` file in the root of the directory. Copy the key hash from the dashboard and assign it to a variable like so:

```ruby
VITE_REACT_APP_KEY = your_key_hash
```

Note that for the React/Vite environment, `KEY` must be prefixed with `VITE_REACT_APP_`. Also, the fetch call that includes the interpolation of this environment variable is written as `import.meta.env.VITE_REACT_APP_KEY`, as opposed to the more common `process.env`, per Vite configuration requirements.
