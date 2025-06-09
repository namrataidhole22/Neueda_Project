import React, { useState } from 'react';

const CreditRiskForm = () => {
    const [formData, setFormData] = useState({
        applicantName: '',
        income: '',
        loanAmount: '',
        creditScore: '',
        employmentStatus: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Loan Approval Form</h2>
            <div>
                <label>
                    Applicant Name:
                    <input
                        type="text"
                        name="applicantName"
                        value={formData.applicantName}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Income:
                    <input
                        type="number"
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Loan Amount:
                    <input
                        type="number"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Credit Score:
                    <input
                        type="number"
                        name="creditScore"
                        value={formData.creditScore}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Employment Status:
                    <select
                        name="employmentStatus"
                        value={formData.employmentStatus}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="employed">Employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="self-employed">Self-Employed</option>
                    </select>
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreditRiskForm;