import React from 'react';

const FilterComponent = () => {
    return (
        <div style={styles.filterContainer}>
            <div>
                <h4>Type</h4>
                <div style={styles.tagsContainer}>
                    <span style={styles.tag}>
                        Refurbished <button style={styles.tagButton}>x</button>
                    </span>
                    <span style={styles.tag}>
                        As-Is <button style={styles.tagButton}>x</button>
                    </span>
                    <span style={styles.tag}>
                        Youth <button style={styles.tagButton}>x</button>
                    </span>
                </div>
            </div>

            {/* Size */}
            <div>
                <h4>Size</h4>
                <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked readOnly /> Small
                </label>
                <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked readOnly /> Medium
                </label>
                <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked readOnly /> Large
                </label>
            </div>

            {/* Price Range */}
            <div>
                <h4>Price Range</h4>
                <input
                    type="range"
                    min="0"
                    max="10000"
                    value="10000"
                    style={styles.slider}
                    readOnly
                />
                <span>$10000</span>
            </div>

            {/* Parts */}
            <div>
                <h4>Parts</h4>
                <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked readOnly /> Tires
                </label>
                <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked readOnly /> Tubes
                </label>
                <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked readOnly /> Bells
                </label>
                <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked readOnly /> Handlebars
                </label>
                <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked readOnly /> Handlebar Accessories
                </label>
                <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked readOnly /> Helmets
                </label>
                <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked readOnly /> Repair & Maintenance
                </label>
            </div>
        </div>
    );
};

const styles = {
    filterContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        maxWidth: '300px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
    },
    tagsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
    },
    tag: {
        backgroundColor: '#f0f0f0',
        padding: '0.2rem 0.5rem',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
    },
    tagButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        marginLeft: '0.5rem',
        color: '#888',
    },
    checkboxLabel: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        margin: '0.25rem 0',
    },
    slider: {
        width: '100%',
    },
};

export default FilterComponent;
