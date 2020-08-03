export default class VisitorForms {

    static communicationPlan(data) {
        const { name, phone, workphone, email } = data
        return (
            `<style>
                table, th, td {
                    border: 1px solid #999999;
                    border-collapse: collapse;
                }
                th {
                    background-color: #eeeeee;
                }
                table {
                    width: 100%
                }
            </style>
            <h1>Communication Plan</h1>
            <table>
                <tr>
                    <th colspan="4">JOB SEEKER</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Work Phone</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>${name}</td>
                    <td>${phone}</td>
                    <td>${workphone}</td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <th colspan="4">IRT MEMBERS</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>`
        )
    }
}