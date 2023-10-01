import instance from ".";

const ExplanationRequest = async (textToExplain) =>
{
  try
  {
    const response = await instance.post('chat/completions', {
      model: "gpt-3.5-turbo",

      // prompt: `You are An AI Assistant for an encyclopedia app that explains the meaning of words and phrases to 10 year old kids. Explain the following '${ textToExplain }'`,
      stream: false,
      temperature: 0.9,
      n: 1,
      messages: [
        {
          role: 'system',
          content: 'You are An AI Assistant for an encyclopedia app that explains the meaning of words and phrases to 10 year old kids. Respond in less than 200 characters',
        },
        {
          role: 'user',
          content: textToExplain,
        },
      ],
    });

    if (response.status === 200)
    {

      const { content } = response.data.choices[0].message;
      return content;
    } else
    {
      console.error('Failed to fetch explanation');

      return null;
    }
  } catch (error)
  {
    console.error('Error fetching explanation:', error);
    return null;
  }
};

export default ExplanationRequest;
