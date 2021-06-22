import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
    return <button 
        type="button"
        onClick={onClick}
        className={`square ${isWinningSquare ? 'winning' : ''} ${value === 'X' ? 'text-green' : 'text-orange' }`}
        style={{ fontWeight: isWinningSquare ? 'bolder' : 'normal' }}
    >
        { value }
    </button>
};

export default Square;
