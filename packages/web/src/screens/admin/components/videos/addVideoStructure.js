
export default (props, update) => [

  {
    element: 'input', placeHolder: 'Enter Video title...', value: 'header', type: 'text', label: 'Video Title:',
  },
  {
    element: 'input', placeHolder: 'Enter Video Url', value: 'videoId', type: 'text', label: 'Url:',
  },
  {
    element: 'button', text: update ? 'Update Video' : 'Add Video', intent: 'PRIMARY',
  },
];
