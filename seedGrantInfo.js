const mongoose = require('mongoose');
const GrantSectionContent = require('./Models/GrantSectionContent');
require('dotenv').config({ path: './.env' });

const seedGrantContent = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const existing = await GrantSectionContent.findOne();
        if (existing) {
            console.log('Grant content already exists. Skipping seed.');
            process.exit();
        }

        const initialContent = {
            title: 'Grant Applications',
            intro: 'The Halal Food Foundation (HFF) offers grants to support charitable initiatives that align with our mission of promoting halal awareness and education. We aim to support projects that contribute to the understanding and accessibility of halal principles within communities.',
            applyTitle: 'Apply For The Grant',
            applyText: "Applications to the Halal Food Foundation can only be accepted from registered charities as recognised by the Charity Commission. Grant applications should be sent in a written format to HFF at Unit 15, Linen House, 253 Kilburn Lane, Queen's Park London, W10 4BQ .",
            deadlines: [
                'There are two closing dates',
                'No further applications will be considered until each closing date has passed',
                'After these closing dates, applications will be forwarded to a panel comprising trustees and advisors of HFF for their consideration',
                'Applicants will be notified as soon as practical after each closing date'
            ],
            requirementsTitle: 'Application Requirements',
            requirementsText: 'The application letter should comprise full details of the organisation, the grant requested, what it is for and how the grant will be spent, and any deadlines. Do not send any further information at this stage. If HFF requests further information, this should be provided as soon as possible.',
            importantNotes: [
                'The average grant will never exceed £5,000 in any one year and in practise will be considerably less',
                'When considering an application to HFF, ensure that your proposal matches the aims of the HFF and within the spirit of the work of HFF',
                'Make sure that your proposal is clear, accurate, and above all, honest',
                'Only one application per charity may be made in any one year',
                'Each grant is a discrete one-off payment with no undertaking that any further grant will be made to that group in the future, although it is free to apply again in subsequent years',
                'If accepted and a grant is offered, the money will be transferred to the bank account of the applicant, upon receipt of an invoice from the charity at the time specified by HFF'
            ],
            processSteps: [
                { icon: 'fas fa-file-alt', title: 'Prepare Application', description: 'Write a detailed application letter with all required information about your organization and project.' },
                { icon: 'fas fa-paper-plane', title: 'Submit by Deadline', description: 'Send your application to our address before the closing dates.' },
                { icon: 'fas fa-users', title: 'Panel Review', description: 'Our trustees and advisors review all applications after each deadline.' },
                { icon: 'fas fa-check-circle', title: 'Notification & Payment', description: 'Successful applicants are notified and receive payment upon invoice submission.' }
            ]
        };

        await GrantSectionContent.create(initialContent);
        console.log('Grant content seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding grant content:', error);
        process.exit(1);
    }
};

seedGrantContent();
