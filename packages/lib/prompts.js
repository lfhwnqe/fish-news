const prompts = [{
  name: 'newsName',
  message: '请选择新闻:',
  default: 'readhub',
  type: 'list',
  choices: [
    {
      name: 'readhub',
      value: 'readhub',
    },
    {
      name: 'solidot',
      value: 'solidot',
    },
  ],
}];

exports.prompts = prompts;
