import React from 'react';

export default class ContactDetails extends React.Component {
    render() {

        const details =(
            <div>
                <p> {this.props.contact.name}</p>
                <p> {this.props.contact.phone}</p>
            </div>
        );

        const blank = (
            <div>Nothing is Selected</div>
        );

        return (
            <div>
                <h2>Details</h2>
                {/* isSelected props 값에 따라 어떤걸 부여할지 정한다
                    ternary expression condition ? true : false
                */}
                {this.props.isSelected ? details : blank}
            </div>
        );
    }
}
ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    }
}