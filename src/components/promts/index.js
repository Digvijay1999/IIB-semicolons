import React from "react";

export default function Prompts({PromptComp}) {

    let chatbotInteraction = [
        "Chatbot: Welcome to the Investment Banker Chatbot! I can help you analyze annual reports of companies. Please upload the annual report you'd like to analyze.",
        "User: [Uploads annual report file]",
        "Chatbot: Great! I've received the annual report. Now, what specific information would you like to know from the report?",
        "User: Can you analyze the revenue trends of the company over the past few years?",
        "Chatbot: Sure! Analyzing revenue trends... Based on the annual report data, the company has shown steady revenue growth over the past three years, with a significant increase of 15% in the latest fiscal year.",
        "User: What are the company's current liquidity ratios?",
        "Chatbot: Let me check... The company's current liquidity ratios indicate a healthy financial position, with a current ratio of 2.5 and a quick ratio of 1.8, suggesting strong liquidity and ability to meet short-term obligations.",
        "User: How does the company's market share compare to its competitors?",
        "Chatbot: Analyzing market share... The company holds a dominant position in the market, with a 35% market share, outperforming its closest competitors by a significant margin.",
        "User: What are the growth prospects for the company in the coming years?",
        "Chatbot: Based on the annual report analysis and future projections, the company is poised for continued growth, driven by expansion into emerging markets and innovative product developments.",
        "User: Thank you for the insights!",
        "Chatbot: You're welcome! If you have any more questions or need further analysis in the future, feel free to ask. Have a great day!",
        "Chatbot: Welcome to the Investment Banker Chatbot! I can help you analyze annual reports of companies. Please upload the annual report you'd like to analyze.",
        "User: [Uploads annual report file]",
        "Chatbot: Great! I've received the annual report. Now, what specific information would you like to know from the report?",
        "User: Can you analyze the revenue trends of the company over the past few years?",
        "Chatbot: Sure! Analyzing revenue trends... Based on the annual report data, the company has shown steady revenue growth over the past three years, with a significant increase of 15% in the latest fiscal year.",
        "User: What are the company's current liquidity ratios?",
        "Chatbot: Let me check... The company's current liquidity ratios indicate a healthy financial position, with a current ratio of 2.5 and a quick ratio of 1.8, suggesting strong liquidity and ability to meet short-term obligations.",
        "User: How does the company's market share compare to its competitors?",
        "Chatbot: Analyzing market share... The company holds a dominant position in the market, with a 35% market share, outperforming its closest competitors by a significant margin.",
        "User: What are the growth prospects for the company in the coming years?",
        "Chatbot: Based on the annual report analysis and future projections, the company is poised for continued growth, driven by expansion into emerging markets and innovative product developments.",
        "User: Thank you for the insights!",
        "Chatbot: You're welcome! If you have any more questions or need further analysis in the future, feel free to ask. Have a great day!",
        "Chatbot: Welcome to the Investment Banker Chatbot! I can help you analyze annual reports of companies. Please upload the annual report you'd like to analyze.",
        "User: [Uploads annual report file]",
        "Chatbot: Great! I've received the annual report. Now, what specific information would you like to know from the report?",
        "User: Can you analyze the revenue trends of the company over the past few years?",
        "Chatbot: Sure! Analyzing revenue trends... Based on the annual report data, the company has shown steady revenue growth over the past three years, with a significant increase of 15% in the latest fiscal year.",
        "User: What are the company's current liquidity ratios?",
        "Chatbot: Let me check... The company's current liquidity ratios indicate a healthy financial position, with a current ratio of 2.5 and a quick ratio of 1.8, suggesting strong liquidity and ability to meet short-term obligations.",
        "User: How does the company's market share compare to its competitors?",
        "Chatbot: Analyzing market share... The company holds a dominant position in the market, with a 35% market share, outperforming its closest competitors by a significant margin.",
        "User: What are the growth prospects for the company in the coming years?",
        "Chatbot: Based on the annual report analysis and future projections, the company is poised for continued growth, driven by expansion into emerging markets and innovative product developments.",
        "User: Thank you for the insights!",
        "Chatbot: You're welcome! If you have any more questions or need further analysis in the future, feel free to ask. Have a great day!"

    ];

    return (
        <div style={{ overflow: "scroll", overflowX: "hidden", margin:'5%', marginBottom:'0' }}>
            {chatbotInteraction.map((interaction, index) => (
                <div key={index} style={{padding:"1%"}}  >
                    {interaction}
                </div>
            ))}
        </div>
    );
}