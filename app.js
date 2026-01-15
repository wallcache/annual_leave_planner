/**
 * Timewell - Annual Leave Planner
 * A single-page web application for planning annual leave with UK bank holidays.
 */

// =============================================================================
// UK Bank Holidays Data (2024-2028)
// =============================================================================

const BANK_HOLIDAYS = {
    'england-wales': {
        2024: [
            { date: '2024-01-01', name: "New Year's Day" },
            { date: '2024-03-29', name: 'Good Friday' },
            { date: '2024-04-01', name: 'Easter Monday' },
            { date: '2024-05-06', name: 'Early May Bank Holiday' },
            { date: '2024-05-27', name: 'Spring Bank Holiday' },
            { date: '2024-08-26', name: 'Summer Bank Holiday' },
            { date: '2024-12-25', name: 'Christmas Day' },
            { date: '2024-12-26', name: 'Boxing Day' },
        ],
        2025: [
            { date: '2025-01-01', name: "New Year's Day" },
            { date: '2025-04-18', name: 'Good Friday' },
            { date: '2025-04-21', name: 'Easter Monday' },
            { date: '2025-05-05', name: 'Early May Bank Holiday' },
            { date: '2025-05-26', name: 'Spring Bank Holiday' },
            { date: '2025-08-25', name: 'Summer Bank Holiday' },
            { date: '2025-12-25', name: 'Christmas Day' },
            { date: '2025-12-26', name: 'Boxing Day' },
        ],
        2026: [
            { date: '2026-01-01', name: "New Year's Day" },
            { date: '2026-04-03', name: 'Good Friday' },
            { date: '2026-04-06', name: 'Easter Monday' },
            { date: '2026-05-04', name: 'Early May Bank Holiday' },
            { date: '2026-05-25', name: 'Spring Bank Holiday' },
            { date: '2026-08-31', name: 'Summer Bank Holiday' },
            { date: '2026-12-25', name: 'Christmas Day' },
            { date: '2026-12-28', name: 'Boxing Day (substitute)' },
        ],
        2027: [
            { date: '2027-01-01', name: "New Year's Day" },
            { date: '2027-03-26', name: 'Good Friday' },
            { date: '2027-03-29', name: 'Easter Monday' },
            { date: '2027-05-03', name: 'Early May Bank Holiday' },
            { date: '2027-05-31', name: 'Spring Bank Holiday' },
            { date: '2027-08-30', name: 'Summer Bank Holiday' },
            { date: '2027-12-27', name: 'Christmas Day (substitute)' },
            { date: '2027-12-28', name: 'Boxing Day (substitute)' },
        ],
        2028: [
            { date: '2028-01-03', name: "New Year's Day (substitute)" },
            { date: '2028-04-14', name: 'Good Friday' },
            { date: '2028-04-17', name: 'Easter Monday' },
            { date: '2028-05-01', name: 'Early May Bank Holiday' },
            { date: '2028-05-29', name: 'Spring Bank Holiday' },
            { date: '2028-08-28', name: 'Summer Bank Holiday' },
            { date: '2028-12-25', name: 'Christmas Day' },
            { date: '2028-12-26', name: 'Boxing Day' },
        ],
        2029: [
            { date: '2029-01-01', name: "New Year's Day" },
            { date: '2029-03-30', name: 'Good Friday' },
            { date: '2029-04-02', name: 'Easter Monday' },
            { date: '2029-05-07', name: 'Early May Bank Holiday' },
            { date: '2029-05-28', name: 'Spring Bank Holiday' },
            { date: '2029-08-27', name: 'Summer Bank Holiday' },
            { date: '2029-12-25', name: 'Christmas Day' },
            { date: '2029-12-26', name: 'Boxing Day' },
        ],
    },
    'scotland': {
        2024: [
            { date: '2024-01-01', name: "New Year's Day" },
            { date: '2024-01-02', name: '2nd January' },
            { date: '2024-03-29', name: 'Good Friday' },
            { date: '2024-05-06', name: 'Early May Bank Holiday' },
            { date: '2024-05-27', name: 'Spring Bank Holiday' },
            { date: '2024-08-05', name: 'Summer Bank Holiday' },
            { date: '2024-12-02', name: "St Andrew's Day (substitute)" },
            { date: '2024-12-25', name: 'Christmas Day' },
            { date: '2024-12-26', name: 'Boxing Day' },
        ],
        2025: [
            { date: '2025-01-01', name: "New Year's Day" },
            { date: '2025-01-02', name: '2nd January' },
            { date: '2025-04-18', name: 'Good Friday' },
            { date: '2025-05-05', name: 'Early May Bank Holiday' },
            { date: '2025-05-26', name: 'Spring Bank Holiday' },
            { date: '2025-08-04', name: 'Summer Bank Holiday' },
            { date: '2025-12-01', name: "St Andrew's Day (substitute)" },
            { date: '2025-12-25', name: 'Christmas Day' },
            { date: '2025-12-26', name: 'Boxing Day' },
        ],
        2026: [
            { date: '2026-01-01', name: "New Year's Day" },
            { date: '2026-01-02', name: '2nd January' },
            { date: '2026-04-03', name: 'Good Friday' },
            { date: '2026-05-04', name: 'Early May Bank Holiday' },
            { date: '2026-05-25', name: 'Spring Bank Holiday' },
            { date: '2026-08-03', name: 'Summer Bank Holiday' },
            { date: '2026-11-30', name: "St Andrew's Day" },
            { date: '2026-12-25', name: 'Christmas Day' },
            { date: '2026-12-28', name: 'Boxing Day (substitute)' },
        ],
        2027: [
            { date: '2027-01-01', name: "New Year's Day" },
            { date: '2027-01-04', name: '2nd January (substitute)' },
            { date: '2027-03-26', name: 'Good Friday' },
            { date: '2027-05-03', name: 'Early May Bank Holiday' },
            { date: '2027-05-31', name: 'Spring Bank Holiday' },
            { date: '2027-08-02', name: 'Summer Bank Holiday' },
            { date: '2027-11-30', name: "St Andrew's Day" },
            { date: '2027-12-27', name: 'Christmas Day (substitute)' },
            { date: '2027-12-28', name: 'Boxing Day (substitute)' },
        ],
        2028: [
            { date: '2028-01-03', name: "New Year's Day (substitute)" },
            { date: '2028-01-04', name: '2nd January (substitute)' },
            { date: '2028-04-14', name: 'Good Friday' },
            { date: '2028-05-01', name: 'Early May Bank Holiday' },
            { date: '2028-05-29', name: 'Spring Bank Holiday' },
            { date: '2028-08-07', name: 'Summer Bank Holiday' },
            { date: '2028-11-30', name: "St Andrew's Day" },
            { date: '2028-12-25', name: 'Christmas Day' },
            { date: '2028-12-26', name: 'Boxing Day' },
        ],
        2029: [
            { date: '2029-01-01', name: "New Year's Day" },
            { date: '2029-01-02', name: '2nd January' },
            { date: '2029-03-30', name: 'Good Friday' },
            { date: '2029-05-07', name: 'Early May Bank Holiday' },
            { date: '2029-05-28', name: 'Spring Bank Holiday' },
            { date: '2029-08-06', name: 'Summer Bank Holiday' },
            { date: '2029-11-30', name: "St Andrew's Day" },
            { date: '2029-12-25', name: 'Christmas Day' },
            { date: '2029-12-26', name: 'Boxing Day' },
        ],
    }
};

// =============================================================================
// Application State
// =============================================================================

const state = {
    config: null,
    leaveBlocks: [],
    undoStack: [],
    selection: {
        active: false,
        startDate: null,
        endDate: null,
        clickMode: false,  // true when waiting for second click
    },
    yearDropdownOpen: false,
    // Drag-to-shift leave state
    leaveDrag: {
        active: false,
        blockId: null,
        startX: null,
        originalStartDate: null,
        originalEndDate: null,
        currentShift: 0,
    },
};

// =============================================================================
// DOM Elements
// =============================================================================

const elements = {};

// =============================================================================
// Initialization
// =============================================================================

document.addEventListener('DOMContentLoaded', init);

function init() {
    cacheElements();
    setupEventListeners();
    loadState();
}

function cacheElements() {
    elements.setupOverlay = document.getElementById('setup-overlay');
    elements.labelOverlay = document.getElementById('label-overlay');
    elements.editOverlay = document.getElementById('edit-overlay');
    elements.planOverlay = document.getElementById('plan-overlay');

    elements.setupForm = document.getElementById('setup-form');
    elements.labelForm = document.getElementById('label-form');
    elements.editForm = document.getElementById('edit-form');

    elements.app = document.getElementById('app');
    elements.calendar = document.getElementById('calendar');
    elements.yearDisplay = document.getElementById('year-display');

    elements.miniYear = document.getElementById('mini-year');
    elements.bankHolidaysUl = document.getElementById('bank-holidays-ul');
    elements.miniYearSidebar = document.getElementById('mini-year-sidebar');
    elements.collapseSidebarBtn = document.getElementById('collapse-sidebar');
    elements.miniYearCompact = document.getElementById('mini-year-compact');
    elements.miniYearCompactGrid = document.getElementById('mini-year-compact-grid');

    elements.summaryRemaining = document.getElementById('summary-remaining');
    elements.summaryUsed = document.getElementById('summary-used');
    elements.summaryGained = document.getElementById('summary-gained');
    elements.summaryRoi = document.getElementById('summary-roi');

    elements.selectionFeedback = document.getElementById('selection-feedback');
    elements.feedbackDays = document.getElementById('feedback-days');
    elements.feedbackTotal = document.getElementById('feedback-total');
    elements.feedbackRoi = document.getElementById('feedback-roi');

    // Today button removed - today is now auto-highlighted in calendar
    elements.settingsBtn = document.getElementById('settings-btn');
    elements.generatePlanBtn = document.getElementById('generate-plan-btn');

    elements.undoToast = document.getElementById('undo-toast');
    elements.clickHint = document.getElementById('click-hint');
    elements.summaryPanel = document.getElementById('summary-panel');

    elements.planDaysList = document.getElementById('plan-days-list');
    elements.planMessageSection = document.getElementById('plan-message-section');
    elements.planMessageFormatted = document.getElementById('plan-message-formatted');
}

function setupEventListeners() {
    // Setup form
    elements.setupForm.addEventListener('submit', handleSetupSubmit);
    document.getElementById('start-over-btn').addEventListener('click', handleStartOver);

    // Advanced settings toggle
    document.getElementById('advanced-toggle').addEventListener('click', toggleAdvancedSettings);
    document.getElementById('leave-year-month').addEventListener('change', updateDayOptions);

    // Label form
    elements.labelForm.addEventListener('submit', handleLabelSubmit);
    document.getElementById('cancel-label').addEventListener('click', cancelSelection);

    // Edit form
    elements.editForm.addEventListener('submit', handleEditSubmit);
    document.getElementById('cancel-edit').addEventListener('click', closeEditModal);
    document.getElementById('delete-leave').addEventListener('click', handleDeleteLeave);

    // Header buttons
    elements.settingsBtn.addEventListener('click', openSettings);
    elements.generatePlanBtn.addEventListener('click', generatePlan);


    // Plan modal
    document.getElementById('close-plan').addEventListener('click', closePlanModal);
    document.getElementById('generate-message-btn').addEventListener('click', showManagerMessage);
    document.getElementById('copy-message').addEventListener('click', copyMessage);

    // Undo
    document.getElementById('undo-btn').addEventListener('click', undoLastAction);

    // Click selection hint - don't show again
    document.getElementById('hide-hint-forever').addEventListener('click', hideHintForever);

    // Summary panel expandable
    elements.summaryPanel.addEventListener('click', toggleSummaryExpanded);

    // Click outside settings/overlays to close
    elements.setupOverlay.addEventListener('click', handleOverlayClick);

    // Sidebar collapse/expand
    elements.collapseSidebarBtn.addEventListener('click', collapseSidebar);
    elements.miniYearCompact.addEventListener('click', expandSidebar);

    // Calendar drag selection
    elements.calendar.addEventListener('mousedown', handleCalendarMouseDown);
    document.addEventListener('mousemove', handleCalendarMouseMove);
    document.addEventListener('mouseup', handleCalendarMouseUp);

    // Leave drag-to-shift
    elements.calendar.addEventListener('mousedown', handleLeaveDragStart);
    document.addEventListener('mousemove', handleLeaveDragMove);
    document.addEventListener('mouseup', handleLeaveDragEnd);

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyDown);

    // Scroll handler for floating panels
    window.addEventListener('scroll', handleFloatingPanels);
    window.addEventListener('resize', handleFloatingPanels);
}

// =============================================================================
// State Management (localStorage)
// =============================================================================

const STORAGE_KEY = 'timewell_data';

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
        try {
            const data = JSON.parse(saved);
            state.config = data.config;
            state.leaveBlocks = data.leaveBlocks || [];
            showApp();
        } catch (e) {
            console.error('Failed to parse saved state:', e);
            showSetup();
        }
    } else {
        showSetup();
    }
}

function saveState() {
    const data = {
        config: state.config,
        leaveBlocks: state.leaveBlocks,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function showSetup() {
    elements.setupOverlay.classList.remove('hidden');
    elements.app.classList.add('hidden');

    if (state.config) {
        document.getElementById('allowance').value = state.config.allowance;

        // Set year radio button
        const yearRadio = document.querySelector(`input[name="year"][value="${state.config.year}"]`);
        if (yearRadio) yearRadio.checked = true;

        document.getElementById('region').value = state.config.region;

        document.querySelectorAll('input[name="workday"]').forEach(cb => {
            cb.checked = state.config.workingDays.includes(parseInt(cb.value));
        });

        // Advanced settings
        document.getElementById('bank-holidays-use-al').checked =
            state.config.bankHolidaysUseAL === true; // Default to false (unchecked)
        document.getElementById('leave-year-month').value =
            state.config.leaveYearMonth || 0;
        updateDayOptions();
        document.getElementById('leave-year-day').value =
            state.config.leaveYearDay || 1;
    }
}

function showApp() {
    elements.setupOverlay.classList.add('hidden');
    elements.app.classList.remove('hidden');

    // Update year display - show range if leave year doesn't start in January
    const leaveYearMonth = state.config.leaveYearMonth || 0;
    if (leaveYearMonth === 0) {
        elements.yearDisplay.textContent = state.config.year;
    } else {
        const startMonth = MONTH_ABBREV[leaveYearMonth];
        const endMonth = MONTH_ABBREV[(leaveYearMonth + 11) % 12];
        const endYear = state.config.year + 1;
        elements.yearDisplay.textContent = `${startMonth} ${state.config.year} – ${endMonth} ${endYear}`;
    }

    renderCalendar();
    renderMiniYear();
    renderCompactYear();
    renderBankHolidaysList();
    updateSummary();

    // Initialize floating panel positions
    setTimeout(handleFloatingPanels, 100);
}

// =============================================================================
// Sidebar Collapse/Expand
// =============================================================================

function collapseSidebar() {
    elements.miniYearSidebar.classList.add('hidden');
    elements.miniYearCompact.classList.remove('hidden');
}

function expandSidebar() {
    elements.miniYearSidebar.classList.remove('hidden');
    elements.miniYearCompact.classList.add('hidden');
}

// =============================================================================
// Setup Form Handling
// =============================================================================

function handleSetupSubmit(e) {
    e.preventDefault();

    const allowance = parseInt(document.getElementById('allowance').value);
    const yearRadio = document.querySelector('input[name="year"]:checked');
    const year = yearRadio ? parseInt(yearRadio.value) : 2026;
    const region = document.getElementById('region').value;

    const workingDays = [];
    document.querySelectorAll('input[name="workday"]:checked').forEach(cb => {
        workingDays.push(parseInt(cb.value));
    });

    if (workingDays.length === 0) {
        alert('Please select at least one working day');
        return;
    }

    // Advanced settings
    const bankHolidaysUseAL = document.getElementById('bank-holidays-use-al').checked;
    const leaveYearMonth = parseInt(document.getElementById('leave-year-month').value);
    const leaveYearDay = parseInt(document.getElementById('leave-year-day').value);

    state.config = {
        allowance,
        year,
        region,
        workingDays,
        bankHolidaysUseAL,
        leaveYearMonth,
        leaveYearDay
    };
    saveState();
    showApp();
}

function openSettings() {
    showSetup();
}

function handleOverlayClick(e) {
    // Close settings if clicking on the overlay background (not the modal itself)
    if (e.target === elements.setupOverlay) {
        if (state.config) {
            // Only close if we already have a config (not first-time setup)
            elements.setupOverlay.classList.add('hidden');
            elements.app.classList.remove('hidden');
        }
    }
}

function toggleAdvancedSettings() {
    const toggle = document.getElementById('advanced-toggle');
    const content = document.getElementById('advanced-content');

    toggle.classList.toggle('open');
    content.classList.toggle('hidden');
}

function updateDayOptions() {
    const monthSelect = document.getElementById('leave-year-month');
    const daySelect = document.getElementById('leave-year-day');
    const month = parseInt(monthSelect.value);

    // Get number of days in the selected month (using a non-leap year as default)
    const daysInMonth = new Date(2024, month + 1, 0).getDate();

    // Store current selection
    const currentDay = parseInt(daySelect.value) || 1;

    // Clear and repopulate
    daySelect.innerHTML = '';
    for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Restore selection if valid
    if (currentDay <= daysInMonth) {
        daySelect.value = currentDay;
    }
}

function toggleSummaryExpanded() {
    const panel = elements.summaryPanel;
    const isExpanded = panel.classList.contains('expanded');

    if (isExpanded) {
        // Collapse
        panel.classList.remove('expanded');
        const expandedContent = panel.querySelector('.summary-expanded-content');
        if (expandedContent) {
            expandedContent.remove();
        }
    } else {
        // Expand
        panel.classList.add('expanded');

        const expandedContent = document.createElement('div');
        expandedContent.className = 'summary-expanded-content';
        expandedContent.innerHTML = `
            <div class="roi-explanation">
                <h4>What is ROI?</h4>
                <p><strong>ROI (Return on Investment)</strong> shows how efficiently you're using your leave days.</p>
                <p>It's calculated as: <strong>Total Days Off / Leave Days Used</strong></p>
                <h4>How it works</h4>
                <ul>
                    <li><strong>Leave days used</strong> = only your working days that require booking off</li>
                    <li><strong>Total days off</strong> = your leave + connected weekends + bank holidays</li>
                </ul>
                <p>For example, taking Monday to Friday off gives you 9 days off (5 leave days + 2 weekend days either side) = 1.8x ROI. Add a bank holiday and you could get 10 days!</p>
            </div>
        `;
        panel.appendChild(expandedContent);
    }
}

function handleStartOver() {
    localStorage.removeItem(STORAGE_KEY);
    state.config = null;
    state.leaveBlocks = [];
    state.undoStack = [];

    // Reset form to defaults
    document.getElementById('allowance').value = 25;
    document.querySelector('input[name="year"][value="2026"]').checked = true;
    document.getElementById('region').value = 'england-wales';
    document.querySelectorAll('input[name="workday"]').forEach(cb => {
        cb.checked = [1, 2, 3, 4, 5].includes(parseInt(cb.value));
    });

    // Reset advanced settings
    document.getElementById('bank-holidays-use-al').checked = false;
    document.getElementById('leave-year-month').value = 0;
    updateDayOptions();
    document.getElementById('leave-year-day').value = 1;

    // Close advanced settings if open
    document.getElementById('advanced-toggle').classList.remove('open');
    document.getElementById('advanced-content').classList.add('hidden');

    // Show confirmation toast
    showClearToast();

    showSetup();
}

function showClearToast() {
    const toast = document.getElementById('clear-toast');
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
}

// =============================================================================
// Calendar Rendering - Continuous Weeks
// =============================================================================

const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const MONTH_ABBREV = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function renderCalendar() {
    elements.calendar.innerHTML = '';

    const year = state.config.year;
    const leaveYearMonth = state.config.leaveYearMonth || 0;
    const leaveYearDay = state.config.leaveYearDay || 1;

    const today = new Date();
    const todayStr = formatDate(today);

    // Get bank holidays for the relevant years
    const bankHolidayMap = {};
    // We may need holidays from the selected year and the next year
    getBankHolidaysForYear(year).forEach(h => { bankHolidayMap[h.date] = h.name; });
    getBankHolidaysForYear(year + 1).forEach(h => { bankHolidayMap[h.date] = h.name; });
    // Also previous year if leave year starts later in the year
    if (leaveYearMonth > 0) {
        getBankHolidaysForYear(year - 1).forEach(h => { bankHolidayMap[h.date] = h.name; });
    }

    // Weekday header
    const weekdayHeader = document.createElement('div');
    weekdayHeader.className = 'weekday-header';
    DAY_NAMES.forEach(day => {
        const label = document.createElement('span');
        label.className = 'weekday-label';
        label.textContent = day;
        weekdayHeader.appendChild(label);
    });
    elements.calendar.appendChild(weekdayHeader);

    // Continuous weeks container
    const weeksContainer = document.createElement('div');
    weeksContainer.className = 'weeks-container';

    // Calculate leave year start date
    const leaveYearStart = new Date(year, leaveYearMonth, leaveYearDay);

    // Calculate end date: 365 days + 2 weeks from start, ending on a Sunday
    let extendedEnd = new Date(leaveYearStart);
    extendedEnd.setDate(extendedEnd.getDate() + 365 + 14); // Add 365 days + 2 weeks
    // Extend to the next Sunday if not already on Sunday
    const extendedDayOfWeek = extendedEnd.getDay();
    if (extendedDayOfWeek !== 0) {
        extendedEnd.setDate(extendedEnd.getDate() + (7 - extendedDayOfWeek));
    }

    // Find the Monday of the week containing the leave year start
    let currentDate = new Date(leaveYearStart);
    const dayOfWeek = currentDate.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    currentDate.setDate(currentDate.getDate() + mondayOffset);

    // Generate weeks until we reach the extended end
    while (currentDate <= extendedEnd) {
        const weekRow = document.createElement('div');
        weekRow.className = 'week-row';

        for (let i = 0; i < 7; i++) {
            const tile = createDayTileForLeaveYear(currentDate, leaveYearStart, todayStr, bankHolidayMap);
            weekRow.appendChild(tile);
            currentDate.setDate(currentDate.getDate() + 1);
        }

        weeksContainer.appendChild(weekRow);
    }

    elements.calendar.appendChild(weeksContainer);
}

function createDayTile(date, year, todayStr, bankHolidayMap) {
    const tile = document.createElement('div');
    tile.className = 'day-tile';

    const dateStr = formatDate(date);
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    const month = date.getMonth();
    const dateYear = date.getFullYear();

    // Check if date is in the target year or the extended next year period
    const isNextYear = dateYear === year + 1;

    // For dates before the target year, show as empty
    if (dateYear < year) {
        tile.classList.add('empty');
        tile.innerHTML = '<span class="day-number"></span>';
        return tile;
    }

    tile.dataset.date = dateStr;

    // Alternating month colors - continue the pattern into next year
    // Use (month + yearOffset * 12) to keep alternation consistent
    const effectiveMonth = isNextYear ? month + 12 : month;
    if (effectiveMonth % 2 === 0) {
        tile.classList.add('month-even');
    } else {
        tile.classList.add('month-odd');
    }

    // Weekend
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    if (isWeekend) {
        tile.classList.add('weekend');
    }

    // Non-working day
    if (!state.config.workingDays.includes(dayOfWeek)) {
        tile.classList.add('non-working');
    }

    // Today
    if (dateStr === todayStr) {
        tile.classList.add('today');
    }

    // Bank holiday
    const bankHolidayName = bankHolidayMap[dateStr];
    if (bankHolidayName) {
        tile.classList.add('bank-holiday');

        // Add bank holiday label
        const holidayLabel = document.createElement('span');
        holidayLabel.className = 'bank-holiday-label';
        // Shorten the name for display
        holidayLabel.textContent = shortenHolidayName(bankHolidayName);
        tile.appendChild(holidayLabel);
    }

    // Leave block
    const leaveBlock = getLeaveBlockForDate(dateStr);
    if (leaveBlock) {
        applyLeaveStyles(tile, dateStr, leaveBlock);
    }

    // Content
    const content = document.createElement('div');
    content.className = 'day-content';

    // Show month name on 1st of each month
    if (dayOfMonth === 1) {
        const monthIndicator = document.createElement('span');
        monthIndicator.className = 'month-indicator';
        monthIndicator.textContent = MONTH_ABBREV[month];
        content.appendChild(monthIndicator);
    }

    const dayNumber = document.createElement('span');
    dayNumber.className = 'day-number';
    dayNumber.textContent = dayOfMonth;
    content.appendChild(dayNumber);

    tile.appendChild(content);

    return tile;
}

function createDayTileForLeaveYear(date, leaveYearStart, todayStr, bankHolidayMap) {
    const tile = document.createElement('div');
    tile.className = 'day-tile';

    const dateStr = formatDate(date);
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    const month = date.getMonth();
    const dateYear = date.getFullYear();
    const leaveYearStartStr = formatDate(leaveYearStart);

    // For dates before the leave year start week, show as empty
    // (These are days at the start of the first week before the leave year begins)
    if (dateStr < leaveYearStartStr) {
        tile.classList.add('empty');
        tile.innerHTML = '<span class="day-number"></span>';
        return tile;
    }

    tile.dataset.date = dateStr;

    // Calculate months since leave year start for alternating colors
    const monthsSinceStart = (dateYear - leaveYearStart.getFullYear()) * 12 + month - leaveYearStart.getMonth();
    if (monthsSinceStart % 2 === 0) {
        tile.classList.add('month-even');
    } else {
        tile.classList.add('month-odd');
    }

    // Weekend
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    if (isWeekend) {
        tile.classList.add('weekend');
    }

    // Non-working day
    if (!state.config.workingDays.includes(dayOfWeek)) {
        tile.classList.add('non-working');
    }

    // Today
    if (dateStr === todayStr) {
        tile.classList.add('today');
    }

    // Bank holiday
    const bankHolidayName = bankHolidayMap[dateStr];
    if (bankHolidayName) {
        tile.classList.add('bank-holiday');

        // Add bank holiday label
        const holidayLabel = document.createElement('span');
        holidayLabel.className = 'bank-holiday-label';
        // Shorten the name for display
        holidayLabel.textContent = shortenHolidayName(bankHolidayName);
        tile.appendChild(holidayLabel);
    }

    // Leave block
    const leaveBlock = getLeaveBlockForDate(dateStr);
    if (leaveBlock) {
        applyLeaveStyles(tile, dateStr, leaveBlock);
    }

    // Content
    const content = document.createElement('div');
    content.className = 'day-content';

    // Show month name on 1st of each month, or on leave year start day
    if (dayOfMonth === 1 || dateStr === leaveYearStartStr) {
        const monthIndicator = document.createElement('span');
        monthIndicator.className = 'month-indicator';
        monthIndicator.textContent = MONTH_ABBREV[month];
        content.appendChild(monthIndicator);
    }

    const dayNumber = document.createElement('span');
    dayNumber.className = 'day-number';
    dayNumber.textContent = dayOfMonth;
    content.appendChild(dayNumber);

    tile.appendChild(content);

    return tile;
}

// Shorten bank holiday names for display
function shortenHolidayName(name) {
    const shortNames = {
        "New Year's Day": "New Year",
        "New Year's Day (substitute)": "New Year",
        "2nd January": "2nd Jan",
        "2nd January (substitute)": "2nd Jan",
        "Good Friday": "Good Fri",
        "Easter Monday": "Easter Mon",
        "Early May Bank Holiday": "May Day",
        "Spring Bank Holiday": "Spring",
        "Summer Bank Holiday": "Summer",
        "St Andrew's Day": "St Andrew's",
        "St Andrew's Day (substitute)": "St Andrew's",
        "Christmas Day": "Christmas",
        "Christmas Day (substitute)": "Christmas",
        "Boxing Day": "Boxing Day",
        "Boxing Day (substitute)": "Boxing Day",
    };
    return shortNames[name] || name.split(' ')[0];
}

function applyLeaveStyles(tile, dateStr, leaveBlock) {
    tile.classList.add('has-leave');
    tile.dataset.leaveId = leaveBlock.id;

    const isStart = dateStr === leaveBlock.startDate;
    const isEnd = dateStr === leaveBlock.endDate;

    if (isStart && isEnd) {
        tile.classList.add('leave-single');
    } else if (isStart) {
        tile.classList.add('leave-start');
    } else if (isEnd) {
        tile.classList.add('leave-end');
    } else {
        tile.classList.add('leave-middle');
    }

    // Add label on start day
    if (isStart) {
        const labelEl = document.createElement('span');
        labelEl.className = 'leave-label';
        labelEl.textContent = leaveBlock.label;
        tile.appendChild(labelEl);

        // Check if there's also a bank holiday label - add class for dual-label styling
        if (tile.classList.contains('bank-holiday')) {
            tile.classList.add('dual-labels');
        }
    }

    // Add edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'leave-edit-btn';
    editBtn.textContent = '···';
    editBtn.dataset.leaveId = leaveBlock.id;
    editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openEditModal(leaveBlock.id);
    });
    tile.appendChild(editBtn);
}

function getBankHolidayDates() {
    const { year, region } = state.config;
    const holidays = BANK_HOLIDAYS[region]?.[year] || [];
    return holidays.map(h => h.date);
}

function getBankHolidays() {
    const { year, region } = state.config;
    return BANK_HOLIDAYS[region]?.[year] || [];
}

function getBankHolidaysForYear(targetYear) {
    const { region } = state.config;
    return BANK_HOLIDAYS[region]?.[targetYear] || [];
}

function getLeaveBlockForDate(dateStr) {
    return state.leaveBlocks.find(block => {
        return dateStr >= block.startDate && dateStr <= block.endDate;
    });
}

// =============================================================================
// Mini Year Sidebar
// =============================================================================

function renderMiniYear() {
    elements.miniYear.innerHTML = '';

    const year = state.config.year;
    const bankHolidays = getBankHolidayDates();
    const today = new Date();
    const todayStr = formatDate(today);

    for (let month = 0; month < 12; month++) {
        const miniMonth = document.createElement('div');
        miniMonth.className = 'mini-month';

        const monthName = document.createElement('div');
        monthName.className = 'mini-month-name';
        monthName.textContent = MONTH_ABBREV[month];
        miniMonth.appendChild(monthName);

        const grid = document.createElement('div');
        grid.className = 'mini-month-grid';

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        // Get starting position (Mon = 0)
        let startDayOfWeek = firstDay.getDay();
        startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

        // Empty cells
        for (let i = 0; i < startDayOfWeek; i++) {
            const empty = document.createElement('div');
            empty.className = 'mini-day empty';
            grid.appendChild(empty);
        }

        // Days
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const date = new Date(year, month, day);
            const dateStr = formatDate(date);
            const dayOfWeek = date.getDay();

            const miniDay = document.createElement('div');
            miniDay.className = 'mini-day';
            miniDay.textContent = day;

            if (dayOfWeek === 0 || dayOfWeek === 6) {
                miniDay.classList.add('weekend');
            }

            if (bankHolidays.includes(dateStr)) {
                miniDay.classList.add('bank-holiday');
            }

            if (getLeaveBlockForDate(dateStr)) {
                miniDay.classList.add('has-leave');
            }

            // Highlight today
            if (dateStr === todayStr) {
                miniDay.classList.add('is-today');
            }

            // Grey out past days
            if (dateStr < todayStr) {
                miniDay.classList.add('is-past');
            }

            grid.appendChild(miniDay);
        }

        miniMonth.appendChild(grid);
        elements.miniYear.appendChild(miniMonth);
    }
}

function renderBankHolidaysList() {
    elements.bankHolidaysUl.innerHTML = '';

    const holidays = getBankHolidays();

    holidays.forEach(holiday => {
        const li = document.createElement('li');
        const date = parseDate(holiday.date);
        li.textContent = `${date.getDate()} ${MONTH_ABBREV[date.getMonth()]} – ${holiday.name}`;
        elements.bankHolidaysUl.appendChild(li);
    });
}

function renderCompactYear() {
    elements.miniYearCompactGrid.innerHTML = '';

    const year = state.config.year;
    const bankHolidays = getBankHolidayDates();
    const workingDays = state.config.workingDays;
    const today = new Date();
    const todayStr = formatDate(today);

    for (let month = 0; month < 12; month++) {
        const compactMonth = document.createElement('div');
        compactMonth.className = 'compact-month';

        const label = document.createElement('span');
        label.className = 'compact-month-label';
        label.textContent = MONTH_ABBREV[month].charAt(0);
        compactMonth.appendChild(label);

        const grid = document.createElement('div');
        grid.className = 'compact-month-days';

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        // Get starting position (Mon = 0)
        let startDayOfWeek = firstDay.getDay();
        startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

        // Empty cells
        for (let i = 0; i < startDayOfWeek; i++) {
            const empty = document.createElement('div');
            empty.className = 'compact-day empty';
            grid.appendChild(empty);
        }

        // Days
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const date = new Date(year, month, day);
            const dateStr = formatDate(date);
            const dayOfWeek = date.getDay();

            const compactDay = document.createElement('div');
            compactDay.className = 'compact-day';

            if (dayOfWeek === 0 || dayOfWeek === 6) {
                compactDay.classList.add('is-weekend');
            }

            if (bankHolidays.includes(dateStr)) {
                compactDay.classList.add('is-bank-holiday');
            }

            if (getLeaveBlockForDate(dateStr)) {
                compactDay.classList.add('has-leave');
            }

            // Highlight today
            if (dateStr === todayStr) {
                compactDay.classList.add('is-today');
            }

            // Grey out past days
            if (dateStr < todayStr) {
                compactDay.classList.add('is-past');
            }

            grid.appendChild(compactDay);
        }

        compactMonth.appendChild(grid);
        elements.miniYearCompactGrid.appendChild(compactMonth);
    }
}

// =============================================================================
// Click-to-Select and Drag Selection
// =============================================================================

function handleCalendarMouseDown(e) {
    const tile = e.target.closest('.day-tile:not(.empty)');
    if (!tile || tile.classList.contains('has-leave')) return;

    const date = tile.dataset.date;
    if (!date) return;

    // Check if we're in click mode (waiting for second click)
    if (state.selection.clickMode) {
        // Second click - complete the selection
        state.selection.endDate = date;
        state.selection.clickMode = false;
        hideClickHint();

        const { startDate, endDate } = normalizeSelection();

        if (hasOverlap(startDate, endDate)) {
            alert('This selection overlaps with existing leave. Please choose different dates.');
            clearSelection();
            return;
        }

        showLabelModal(startDate, endDate);
        return;
    }

    // First click - start selection
    state.selection.active = true;
    state.selection.startDate = date;
    state.selection.endDate = date;
    state.selection.clickMode = true;

    updateSelectionVisuals();
    showClickHint();
    showSelectionFeedback();
}

function handleCalendarMouseMove(e) {
    if (!state.selection.active || !state.selection.clickMode) return;

    const tile = document.elementFromPoint(e.clientX, e.clientY)?.closest('.day-tile:not(.empty)');
    if (!tile) return;

    const date = tile.dataset.date;
    if (!date) return;

    // Update preview while hovering (but don't finalize)
    state.selection.endDate = date;
    updateSelectionVisuals();
    updateSelectionFeedback();
}

function handleCalendarMouseUp(e) {
    // In click mode, we don't finalize on mouseup - we wait for second click
    if (state.selection.clickMode) {
        return;
    }

    if (!state.selection.active) return;

    state.selection.active = false;

    const { startDate, endDate } = normalizeSelection();

    if (startDate && endDate) {
        if (hasOverlap(startDate, endDate)) {
            alert('This selection overlaps with existing leave. Please choose different dates.');
            clearSelection();
            return;
        }

        showLabelModal(startDate, endDate);
    } else {
        clearSelection();
    }
}

function showClickHint() {
    // Check if user has opted to hide hint forever
    if (localStorage.getItem('timewell_hide_hint') === 'true') {
        return;
    }
    elements.clickHint.classList.remove('hidden');
}

function hideClickHint() {
    elements.clickHint.classList.add('hidden');
}

function hideHintForever() {
    localStorage.setItem('timewell_hide_hint', 'true');
    hideClickHint();
}

function normalizeSelection() {
    let { startDate, endDate } = state.selection;

    if (!startDate || !endDate) return { startDate: null, endDate: null };

    if (startDate > endDate) {
        [startDate, endDate] = [endDate, startDate];
    }

    return { startDate, endDate };
}

function hasOverlap(startDate, endDate) {
    return state.leaveBlocks.some(block => {
        return !(endDate < block.startDate || startDate > block.endDate);
    });
}

function updateSelectionVisuals() {
    document.querySelectorAll('.day-tile.selecting, .day-tile.selection-start, .day-tile.selection-end').forEach(tile => {
        tile.classList.remove('selecting', 'selection-start', 'selection-end');
    });

    const { startDate, endDate } = normalizeSelection();
    if (!startDate || !endDate) return;

    document.querySelectorAll('.day-tile[data-date]').forEach(tile => {
        const date = tile.dataset.date;
        if (date >= startDate && date <= endDate) {
            if (date === startDate) {
                tile.classList.add('selection-start');
            } else if (date === endDate) {
                tile.classList.add('selection-end');
            } else {
                tile.classList.add('selecting');
            }
        }
    });
}

function showSelectionFeedback() {
    elements.selectionFeedback.classList.remove('hidden');
    updateSelectionFeedback();
}

function updateSelectionFeedback() {
    const { startDate, endDate } = normalizeSelection();
    if (!startDate || !endDate) return;

    const roi = calculateROIWithConnectedWeekends(startDate, endDate);

    elements.feedbackDays.textContent = roi.leaveDaysUsed;
    elements.feedbackTotal.textContent = roi.totalDaysOff;

    // Calculate and display ROI
    if (roi.leaveDaysUsed > 0) {
        const roiValue = (roi.totalDaysOff / roi.leaveDaysUsed).toFixed(1);
        elements.feedbackRoi.textContent = `${roiValue}x`;
    } else {
        elements.feedbackRoi.textContent = '-';
    }
}

function hideSelectionFeedback() {
    elements.selectionFeedback.classList.add('hidden');
}

function clearSelection() {
    state.selection = { active: false, startDate: null, endDate: null, clickMode: false };

    document.querySelectorAll('.day-tile.selecting, .day-tile.selection-start, .day-tile.selection-end').forEach(tile => {
        tile.classList.remove('selecting', 'selection-start', 'selection-end');
    });

    hideSelectionFeedback();
    hideClickHint();
}

// =============================================================================
// ROI Calculation with Connected Weekends
// =============================================================================

function calculateROIWithConnectedWeekends(startDate, endDate) {
    const bankHolidays = getBankHolidayDates();
    // Also get next year's bank holidays for January selections
    const nextYearHolidays = getBankHolidaysForYear(state.config.year + 1);
    const allBankHolidays = [...bankHolidays, ...nextYearHolidays.map(h => h.date)];

    const { workingDays } = state.config;
    // If bankHolidaysUseAL is true, bank holidays require AL (not free)
    // If bankHolidaysUseAL is false/undefined, bank holidays are free
    const bankHolidaysFree = !state.config.bankHolidaysUseAL;

    // Expand range to include connected weekends
    let expandedStart = parseDate(startDate);
    let expandedEnd = parseDate(endDate);

    // Expand backwards to include connected weekends (and bank holidays if they're free)
    while (true) {
        const prevDay = new Date(expandedStart);
        prevDay.setDate(prevDay.getDate() - 1);
        const prevDayOfWeek = prevDay.getDay();
        const prevDateStr = formatDate(prevDay);

        // Check if previous day is a weekend or bank holiday
        const isWeekend = prevDayOfWeek === 0 || prevDayOfWeek === 6;
        const isBankHoliday = allBankHolidays.includes(prevDateStr);

        if (isWeekend || (isBankHoliday && bankHolidaysFree)) {
            expandedStart = prevDay;
        } else {
            break;
        }
    }

    // Expand forwards to include connected weekends (and bank holidays if they're free)
    while (true) {
        const nextDay = new Date(expandedEnd);
        nextDay.setDate(nextDay.getDate() + 1);
        const nextDayOfWeek = nextDay.getDay();
        const nextDateStr = formatDate(nextDay);

        // Check if next day is a weekend or bank holiday
        const isWeekend = nextDayOfWeek === 0 || nextDayOfWeek === 6;
        const isBankHoliday = allBankHolidays.includes(nextDateStr);

        if (isWeekend || (isBankHoliday && bankHolidaysFree)) {
            expandedEnd = nextDay;
        } else {
            break;
        }
    }

    let leaveDaysUsed = 0;
    let totalDaysOff = 0;

    // Count days in expanded range
    for (let d = new Date(expandedStart); d <= expandedEnd; d.setDate(d.getDate() + 1)) {
        const dateStr = formatDate(d);
        const dayOfWeek = d.getDay();

        totalDaysOff++;

        // Only count leave days for the original selection range
        if (dateStr >= startDate && dateStr <= endDate) {
            const isWorkingDay = workingDays.includes(dayOfWeek);
            const isBankHoliday = allBankHolidays.includes(dateStr);

            // If bank holidays are free, don't count them as leave days
            // If bank holidays require AL, they count as leave days if they're working days
            if (isWorkingDay) {
                if (isBankHoliday && bankHolidaysFree) {
                    // Bank holiday is free, don't count
                } else {
                    leaveDaysUsed++;
                }
            }
        }
    }

    return { leaveDaysUsed, totalDaysOff };
}

// =============================================================================
// Leave Drag-to-Shift
// =============================================================================

function handleLeaveDragStart(e) {
    const tile = e.target.closest('.day-tile.has-leave');
    if (!tile) return;

    // Don't start drag if clicking the edit button
    if (e.target.closest('.leave-edit-btn')) return;

    const blockId = tile.dataset.leaveId;
    const block = state.leaveBlocks.find(b => b.id === blockId);
    if (!block) return;

    e.preventDefault();
    e.stopPropagation();

    state.leaveDrag = {
        active: true,
        blockId: blockId,
        startX: e.clientX,
        originalStartDate: block.startDate,
        originalEndDate: block.endDate,
        currentShift: 0,
    };

    // Add dragging class to body
    document.body.classList.add('leave-dragging');

    // Highlight the leave block being dragged
    document.querySelectorAll(`.day-tile[data-leave-id="${blockId}"]`).forEach(t => {
        t.classList.add('dragging');
    });
}

function handleLeaveDragMove(e) {
    if (!state.leaveDrag.active) return;

    const deltaX = e.clientX - state.leaveDrag.startX;
    // Calculate shift in days based on pixel movement (approx 130px per day tile)
    const dayTileWidth = 130;
    const shift = Math.round(deltaX / dayTileWidth);

    if (shift !== state.leaveDrag.currentShift) {
        state.leaveDrag.currentShift = shift;
        previewLeaveShift(shift);
    }
}

function handleLeaveDragEnd(e) {
    if (!state.leaveDrag.active) return;

    const { blockId, currentShift, originalStartDate, originalEndDate } = state.leaveDrag;

    document.body.classList.remove('leave-dragging');
    document.querySelectorAll('.day-tile.dragging').forEach(t => {
        t.classList.remove('dragging');
    });
    document.querySelectorAll('.day-tile.drag-preview').forEach(t => {
        t.classList.remove('drag-preview');
    });

    if (currentShift !== 0) {
        // Apply the shift
        const block = state.leaveBlocks.find(b => b.id === blockId);
        if (block) {
            const newStartDate = shiftDate(originalStartDate, currentShift);
            const newEndDate = shiftDate(originalEndDate, currentShift);

            // Check if new dates are within the year
            const year = state.config.year;
            const startYear = parseDate(newStartDate).getFullYear();
            const endYear = parseDate(newEndDate).getFullYear();

            if (startYear === year && endYear === year) {
                // Check for overlaps with other leave blocks
                const hasOverlap = state.leaveBlocks.some(b => {
                    if (b.id === blockId) return false;
                    return !(newEndDate < b.startDate || newStartDate > b.endDate);
                });

                if (!hasOverlap) {
                    // Save to undo stack
                    state.undoStack.push({
                        action: 'shift',
                        block: {
                            id: blockId,
                            oldStartDate: originalStartDate,
                            oldEndDate: originalEndDate,
                            newStartDate: newStartDate,
                            newEndDate: newEndDate,
                        }
                    });

                    // Apply the shift
                    block.startDate = newStartDate;
                    block.endDate = newEndDate;

                    // Recalculate ROI
                    const roi = calculateROIWithConnectedWeekends(newStartDate, newEndDate);
                    block.leaveDaysUsed = roi.leaveDaysUsed;
                    block.totalDaysOff = roi.totalDaysOff;

                    saveState();
                    renderCalendar();
                    renderMiniYear();
                    renderCompactYear();
                    updateSummary();
                }
            }
        }
    }

    // Reset drag state
    state.leaveDrag = {
        active: false,
        blockId: null,
        startX: null,
        originalStartDate: null,
        originalEndDate: null,
        currentShift: 0,
    };
}

function previewLeaveShift(shift) {
    const { blockId, originalStartDate, originalEndDate } = state.leaveDrag;

    // Remove existing previews
    document.querySelectorAll('.day-tile.drag-preview').forEach(t => {
        t.classList.remove('drag-preview');
    });

    // Calculate new dates
    const newStartDate = shiftDate(originalStartDate, shift);
    const newEndDate = shiftDate(originalEndDate, shift);

    // Show preview on new positions
    document.querySelectorAll('.day-tile[data-date]').forEach(tile => {
        const date = tile.dataset.date;
        if (date >= newStartDate && date <= newEndDate) {
            tile.classList.add('drag-preview');
        }
    });
}

function shiftDate(dateStr, days) {
    const date = parseDate(dateStr);
    date.setDate(date.getDate() + days);
    return formatDate(date);
}

// =============================================================================
// Label Modal
// =============================================================================

function showLabelModal(startDate, endDate) {
    const roi = calculateROIWithConnectedWeekends(startDate, endDate);

    document.getElementById('label-summary').textContent =
        `${formatDateRange(startDate, endDate)} • ${roi.leaveDaysUsed} leave days → ${roi.totalDaysOff} days off`;

    document.getElementById('leave-label').value = '';

    elements.labelOverlay.classList.remove('hidden');
    document.getElementById('leave-label').focus();
}

// Random emojis for empty labels
const RANDOM_LEAVE_EMOJIS = ['🍕', '⭐', '🤩', '🌴', '😎', '🚕', '🥾', '🚞'];

function getRandomEmoji() {
    return RANDOM_LEAVE_EMOJIS[Math.floor(Math.random() * RANDOM_LEAVE_EMOJIS.length)];
}

function handleLabelSubmit(e) {
    e.preventDefault();

    let label = document.getElementById('leave-label').value.trim();
    if (!label) {
        label = getRandomEmoji();
    }

    const { startDate, endDate } = normalizeSelection();
    const roi = calculateROIWithConnectedWeekends(startDate, endDate);

    const leaveBlock = {
        id: generateId(),
        label,
        startDate,
        endDate,
        leaveDaysUsed: roi.leaveDaysUsed,
        totalDaysOff: roi.totalDaysOff,
    };

    state.leaveBlocks.push(leaveBlock);

    // Add to undo stack
    state.undoStack.push({ action: 'add', block: { ...leaveBlock } });

    saveState();

    closeLabelModal();
    clearSelection();
    renderCalendar();
    renderMiniYear();
    renderCompactYear();
    updateSummary();
}

function closeLabelModal() {
    elements.labelOverlay.classList.add('hidden');
}

function cancelSelection() {
    closeLabelModal();
    clearSelection();
}

// =============================================================================
// Edit Modal
// =============================================================================

function openEditModal(blockId) {
    const block = state.leaveBlocks.find(b => b.id === blockId);
    if (!block) return;

    document.getElementById('edit-block-id').value = blockId;
    document.getElementById('edit-label').value = block.label;
    document.getElementById('edit-summary').textContent =
        `${formatDateRange(block.startDate, block.endDate)} • ${block.leaveDaysUsed} leave days → ${block.totalDaysOff} days off`;

    elements.editOverlay.classList.remove('hidden');
    document.getElementById('edit-label').focus();
}

function handleEditSubmit(e) {
    e.preventDefault();

    const blockId = document.getElementById('edit-block-id').value;
    const newLabel = document.getElementById('edit-label').value.trim();

    if (!newLabel) return;

    const block = state.leaveBlocks.find(b => b.id === blockId);
    if (block) {
        block.label = newLabel;
        saveState();
        renderCalendar();
    }

    closeEditModal();
}

function closeEditModal() {
    elements.editOverlay.classList.add('hidden');
}

function handleDeleteLeave() {
    const blockId = document.getElementById('edit-block-id').value;
    const blockIndex = state.leaveBlocks.findIndex(b => b.id === blockId);

    if (blockIndex !== -1) {
        const deleted = state.leaveBlocks[blockIndex];
        state.undoStack.push({ action: 'delete', block: { ...deleted } });

        state.leaveBlocks.splice(blockIndex, 1);
        saveState();
        renderCalendar();
        renderMiniYear();
        renderCompactYear();
        updateSummary();

        showUndoToast();
    }

    closeEditModal();
}

// =============================================================================
// Undo Functionality
// =============================================================================

function showUndoToast() {
    elements.undoToast.classList.remove('hidden');

    setTimeout(() => {
        elements.undoToast.classList.add('hidden');
    }, 5000);
}

function undoLastAction() {
    const lastAction = state.undoStack.pop();

    if (!lastAction) return;

    if (lastAction.action === 'delete') {
        // Restore deleted block
        state.leaveBlocks.push(lastAction.block);
    } else if (lastAction.action === 'add') {
        // Remove added block
        const index = state.leaveBlocks.findIndex(b => b.id === lastAction.block.id);
        if (index !== -1) {
            state.leaveBlocks.splice(index, 1);
        }
    } else if (lastAction.action === 'shift') {
        // Restore original dates
        const block = state.leaveBlocks.find(b => b.id === lastAction.block.id);
        if (block) {
            block.startDate = lastAction.block.oldStartDate;
            block.endDate = lastAction.block.oldEndDate;
            // Recalculate ROI
            const roi = calculateROIWithConnectedWeekends(block.startDate, block.endDate);
            block.leaveDaysUsed = roi.leaveDaysUsed;
            block.totalDaysOff = roi.totalDaysOff;
        }
    }

    saveState();
    renderCalendar();
    renderMiniYear();
    renderCompactYear();
    updateSummary();

    elements.undoToast.classList.add('hidden');
}

// =============================================================================
// Summary Panel
// =============================================================================

function updateSummary() {
    const { allowance } = state.config;

    let totalUsed = 0;
    let totalGained = 0;

    state.leaveBlocks.forEach(block => {
        totalUsed += block.leaveDaysUsed;
        totalGained += block.totalDaysOff;
    });

    const remaining = allowance - totalUsed;
    const roi = totalUsed > 0 ? (totalGained / totalUsed).toFixed(1) : '-';

    elements.summaryRemaining.textContent = remaining;
    elements.summaryUsed.textContent = totalUsed;
    elements.summaryGained.textContent = totalGained;
    elements.summaryRoi.textContent = totalUsed > 0 ? `${roi}x` : '-';

    if (remaining < 0) {
        elements.summaryRemaining.style.color = 'var(--accent-danger)';
    } else if (remaining <= 5) {
        elements.summaryRemaining.style.color = 'var(--accent-warning)';
    } else {
        elements.summaryRemaining.style.color = 'var(--accent-success)';
    }
}

// =============================================================================
// Generate Plan
// =============================================================================

function generatePlan() {
    if (state.leaveBlocks.length === 0) {
        alert('No leave planned yet. Select dates on the calendar to add leave.');
        return;
    }

    // Hide message section initially
    elements.planMessageSection.classList.add('hidden');

    // Get all working days that need to be booked, grouped by month
    const daysByMonth = {};
    const bankHolidays = getBankHolidayDates();

    state.leaveBlocks.forEach(block => {
        const start = parseDate(block.startDate);
        const end = parseDate(block.endDate);

        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            const dateStr = formatDate(d);
            const dayOfWeek = d.getDay();

            const isWorkingDay = state.config.workingDays.includes(dayOfWeek);
            const isBankHoliday = bankHolidays.includes(dateStr);

            if (isWorkingDay && !isBankHoliday) {
                const month = d.getMonth();
                if (!daysByMonth[month]) {
                    daysByMonth[month] = [];
                }
                daysByMonth[month].push({
                    date: dateStr,
                    day: d.getDate(),
                    dayName: DAY_NAMES[dayOfWeek === 0 ? 6 : dayOfWeek - 1],
                    label: block.label
                });
            }
        }
    });

    // Build days list HTML
    elements.planDaysList.innerHTML = '';

    Object.keys(daysByMonth).sort((a, b) => a - b).forEach(monthIndex => {
        const monthGroup = document.createElement('div');
        monthGroup.className = 'plan-month-group';

        const monthName = document.createElement('div');
        monthName.className = 'plan-month-name';
        monthName.textContent = MONTH_NAMES[monthIndex];
        monthGroup.appendChild(monthName);

        const daysContainer = document.createElement('div');
        daysContainer.className = 'plan-days';

        // Sort days and remove duplicates
        const uniqueDays = [];
        const seen = new Set();
        daysByMonth[monthIndex].forEach(day => {
            if (!seen.has(day.date)) {
                seen.add(day.date);
                uniqueDays.push(day);
            }
        });
        uniqueDays.sort((a, b) => a.day - b.day);

        uniqueDays.forEach(day => {
            const dayEl = document.createElement('span');
            dayEl.className = 'plan-day';
            dayEl.innerHTML = `${day.dayName} ${day.day}<span class="leave-name">${day.label}</span>`;
            daysContainer.appendChild(dayEl);
        });

        monthGroup.appendChild(daysContainer);
        elements.planDaysList.appendChild(monthGroup);
    });

    elements.planOverlay.classList.remove('hidden');
}

function showManagerMessage() {
    elements.planMessageSection.classList.remove('hidden');

    // Generate formatted message
    const sortedBlocks = [...state.leaveBlocks].sort((a, b) => a.startDate.localeCompare(b.startDate));

    let html = '<div class="greeting">Hi,</div>';
    html += '<div class="intro">Would it be okay to book the following annual leave for the coming year:</div>';
    html += '<ul class="leave-list">';

    sortedBlocks.forEach(block => {
        const workingDays = getWorkingDaysInRange(block.startDate, block.endDate);
        if (workingDays.length > 0) {
            const start = workingDays[0];
            const end = workingDays[workingDays.length - 1];
            const dayCount = workingDays.length;
            const dayWord = dayCount === 1 ? 'day' : 'days';
            html += `<li>${formatDateFriendlyFull(start)} – ${formatDateFriendlyFull(end)} (${dayCount} ${dayWord})</li>`;
        }
    });

    html += '</ul>';
    html += '<div class="sign-off">Thanks!</div>';

    elements.planMessageFormatted.innerHTML = html;
}

function getWorkingDaysInRange(startDate, endDate) {
    const bankHolidays = getBankHolidayDates();
    const { workingDays } = state.config;
    const result = [];

    const start = parseDate(startDate);
    const end = parseDate(endDate);

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dateStr = formatDate(d);
        const dayOfWeek = d.getDay();

        const isWorkingDay = workingDays.includes(dayOfWeek);
        const isBankHoliday = bankHolidays.includes(dateStr);

        if (isWorkingDay && !isBankHoliday) {
            result.push(dateStr);
        }
    }

    return result;
}

function closePlanModal() {
    elements.planOverlay.classList.add('hidden');
}

function copyMessage() {
    // Build plain text version
    const sortedBlocks = [...state.leaveBlocks].sort((a, b) => a.startDate.localeCompare(b.startDate));

    let text = 'Hi,\n\n';
    text += 'Would it be okay to book the following annual leave for the coming year:\n\n';

    sortedBlocks.forEach(block => {
        const workingDays = getWorkingDaysInRange(block.startDate, block.endDate);
        if (workingDays.length > 0) {
            const start = workingDays[0];
            const end = workingDays[workingDays.length - 1];
            const dayCount = workingDays.length;
            const dayWord = dayCount === 1 ? 'day' : 'days';
            text += `• ${formatDateFriendlyFull(start)} – ${formatDateFriendlyFull(end)} (${dayCount} ${dayWord})\n`;
        }
    });

    text += '\nThanks!';

    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copy-message');
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = original, 2000);
    });
}

// =============================================================================
// Floating Panel Position Handler
// =============================================================================

function handleFloatingPanels() {
    const header = document.getElementById('header');
    const footer = document.getElementById('app-footer');
    const summaryPanel = elements.summaryPanel;
    const miniYearCompact = elements.miniYearCompact;
    const miniYearSidebar = elements.miniYearSidebar;

    if (!header || !footer || !summaryPanel) return;

    const headerRect = header.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const headerBottom = Math.max(headerRect.bottom, 0);
    const footerTop = Math.min(footerRect.top, viewportHeight);

    // Summary panel - keep above footer
    const summaryHeight = summaryPanel.offsetHeight;
    const summaryMinBottom = 32; // var(--space-xl)

    if (footerTop < viewportHeight) {
        // Footer is visible, push summary panel up
        const newBottom = viewportHeight - footerTop + 16;
        summaryPanel.style.bottom = `${newBottom}px`;
    } else {
        summaryPanel.style.bottom = `${summaryMinBottom}px`;
    }

    // Year overview compact - keep below header
    if (miniYearCompact && !miniYearCompact.classList.contains('hidden')) {
        const compactTop = Math.max(headerBottom + 10, 90);
        miniYearCompact.style.top = `${compactTop}px`;

        // Also check footer collision
        const compactRect = miniYearCompact.getBoundingClientRect();
        if (compactRect.bottom > footerTop - 16) {
            miniYearCompact.style.top = `${footerTop - miniYearCompact.offsetHeight - 16}px`;
        }
    }

    // Year overview expanded sidebar - keep below header and above footer
    if (miniYearSidebar && !miniYearSidebar.classList.contains('hidden')) {
        const sidebarTop = Math.max(headerBottom + 10, 90);
        miniYearSidebar.style.top = `${sidebarTop}px`;

        const maxHeight = footerTop - sidebarTop - 16;
        if (maxHeight < miniYearSidebar.scrollHeight) {
            miniYearSidebar.style.maxHeight = `${Math.max(maxHeight, 200)}px`;
        } else {
            miniYearSidebar.style.maxHeight = `calc(100vh - 100px)`;
        }
    }
}

// =============================================================================
// Keyboard Shortcuts
// =============================================================================

function handleKeyDown(e) {
    if (e.key === 'Escape') {
        if (!elements.labelOverlay.classList.contains('hidden')) {
            cancelSelection();
        } else if (!elements.editOverlay.classList.contains('hidden')) {
            closeEditModal();
        } else if (!elements.planOverlay.classList.contains('hidden')) {
            closePlanModal();
        }
        closeYearDropdown();
    }

    if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
        if (state.undoStack.length > 0) {
            e.preventDefault();
            undoLastAction();
        }
    }
}

// =============================================================================
// Utility Functions
// =============================================================================

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function parseDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
}

function formatDateRange(startDate, endDate) {
    const start = parseDate(startDate);
    const end = parseDate(endDate);

    const startStr = `${start.getDate()} ${MONTH_ABBREV[start.getMonth()]}`;
    const endStr = `${end.getDate()} ${MONTH_ABBREV[end.getMonth()]}`;

    if (startDate === endDate) {
        return startStr;
    }

    return `${startStr} – ${endStr}`;
}

function formatDateFriendly(dateStr) {
    const date = parseDate(dateStr);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = dayNames[date.getDay()];
    const dayNum = date.getDate();
    const month = MONTH_ABBREV[date.getMonth()];

    return `${day} ${dayNum} ${month}`;
}

function formatDateFriendlyFull(dateStr) {
    const date = parseDate(dateStr);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = dayNames[date.getDay()];
    const dayNum = date.getDate();
    const month = MONTH_ABBREV[date.getMonth()];

    return `${day} ${dayNum} ${month}`;
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
