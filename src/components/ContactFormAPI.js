
// This is a utility file to handle API calls from your contact form

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit form');
    }
    
    return data;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
}
