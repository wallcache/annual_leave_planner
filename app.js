/**
 * Leavewise - Annual Leave Planner
 * A single-page web application for planning annual leave with UK bank holidays.
 *
 * Features:
 * - Year-at-a-glance calendar
 * - Drag to select leave with live ROI calculation
 * - UK bank holidays (England & Wales, Scotland)
 * - localStorage persistence
 * - Export to copyable message or CSV
 */

// =============================================================================
// UK Bank Holidays Data (2024-2027)
// Source: gov.uk - Embedded for offline capability
// =============================================================================

const BANK_HOLIDAYS = {
    'england-wales': {
        2024: [
            '2024-01-01', // New Year's Day
            '2024-03-29', // Good Friday
            '2024-04-01', // Easter Monday
            '2024-05-06', // Early May bank holiday
            '2024-05-27', // Spring bank holiday
            '2024-08-26', // Summer bank holiday
            '2024-12-25', // Christmas Day
            '2024-12-26', // Boxing Day
        ],
        2025: [
            '2025-01-01', // New Year's Day
            '2025-04-18', // Good Friday
            '2025-04-21', // Easter Monday
            '2025-05-05', // Early May bank holiday
            '2025-05-26', // Spring bank holiday
            '2025-08-25', // Summer bank holiday
            '2025-12-25', // Christmas Day
            '2025-12-26', // Boxing Day
        ],
        2026: [
            '2026-01-01', // New Year's Day
            '2026-04-03', // Good Friday
            '2026-04-06', // Easter Monday
            '2026-05-04', // Early May bank holiday
            '2026-05-25', // Spring bank holiday
            '2026-08-31', // Summer bank holiday
            '2026-12-25', // Christmas Day
            '2026-12-28', // Boxing Day (substitute)
        ],
        2027: [
            '2027-01-01', // New Year's Day
            '2027-03-26', // Good Friday
            '2027-03-29', // Easter Monday
            '2027-05-03', // Early May bank holiday
            '2027-05-31', // Spring bank holiday
            '2027-08-30', // Summer bank holiday
            '2027-12-27', // Christmas Day (substitute)
            '2027-12-28', // Boxing Day (substitute)
        ],
    },
    'scotland': {
        2024: [
            '2024-01-01', // New Year's Day
            '2024-01-02', // 2nd January
            '2024-03-29', // Good Friday
            '2024-05-06', // Early May bank holiday
            '2024-05-27', // Spring bank holiday
            '2024-08-05', // Summer bank holiday
            '2024-11-30', // St Andrew's Day (substitute on Dec 2)
            '2024-12-02', // St Andrew's Day substitute
            '2024-12-25', // Christmas Day
            '2024-12-26', // Boxing Day
        ],
        2025: [
            '2025-01-01', // New Year's Day
            '2025-01-02', // 2nd January
            '2025-04-18', // Good Friday
            '2025-05-05', // Early May bank holiday
            '2025-05-26', // Spring bank holiday
            '2025-08-04', // Summer bank holiday
            '2025-12-01', // St Andrew's Day (substitute)
            '2025-12-25', // Christmas Day
            '2025-12-26', // Boxing Day
        ],
        2026: [
            '2026-01-01', // New Year's Day
            '2026-01-02', // 2nd January
            '2026-04-03', // Good Friday
            '2026-05-04', // Early May bank holiday
            '2026-05-25', // Spring bank holiday
            '2026-08-03', // Summer bank holiday
            '2026-11-30', // St Andrew's Day
            '2026-12-25', // Christmas Day
            '2026-12-28', // Boxing Day (substitute)
        ],
        2027: [
            '2027-01-01', // New Year's Day
            '2027-01-04', // 2nd January (substitute)
            '2027-03-26', // Good Friday
            '2027-05-03', // Early May bank holiday
            '2027-05-31', // Spring bank holiday
            '2027-08-02', // Summer bank holiday
            '2027-11-30', // St Andrew's Day
            '2027-12-27', // Christmas Day (substitute)
            '2027-12-28', // Boxing Day (substitute)
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
    },
};

// =============================================================================
// DOM Elements
// =============================================================================

const elements = {
    // Overlays
    setupOverlay: null,
    labelOverlay: null,
    editOverlay: null,
    planOverlay: null,

    // Forms
    setupForm: null,
    labelForm: null,
    editForm: null,

    // App
    app: null,
    calendar: null,
    yearDisplay: null,

    // Summary
    summaryRemaining: null,
    summaryUsed: null,
    summaryGained: null,
    summaryRoi: null,

    // Selection feedback
    selectionFeedback: null,
    feedbackDays: null,
    feedbackTotal: null,

    // Buttons
    jumpTodayBtn: null,
    settingsBtn: null,
    generatePlanBtn: null,

    // Toast
    undoToast: null,
};

// =============================================================================
// Initialization
// =============================================================================

document.addEventListener('DOMContentLoaded', init);

function init() {
    // Cache DOM elements
    cacheElements();

    // Set up event listeners
    setupEventListeners();

    // Load from localStorage or show setup
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

    elements.summaryRemaining = document.getElementById('summary-remaining');
    elements.summaryUsed = document.getElementById('summary-used');
    elements.summaryGained = document.getElementById('summary-gained');
    elements.summaryRoi = document.getElementById('summary-roi');

    elements.selectionFeedback = document.getElementById('selection-feedback');
    elements.feedbackDays = document.getElementById('feedback-days');
    elements.feedbackTotal = document.getElementById('feedback-total');

    elements.jumpTodayBtn = document.getElementById('jump-today');
    elements.settingsBtn = document.getElementById('settings-btn');
    elements.generatePlanBtn = document.getElementById('generate-plan-btn');

    elements.undoToast = document.getElementById('undo-toast');
}

function setupEventListeners() {
    // Setup form
    elements.setupForm.addEventListener('submit', handleSetupSubmit);

    // Label form
    elements.labelForm.addEventListener('submit', handleLabelSubmit);
    document.getElementById('cancel-label').addEventListener('click', cancelSelection);

    // Edit form
    elements.editForm.addEventListener('submit', handleEditSubmit);
    document.getElementById('cancel-edit').addEventListener('click', closeEditModal);
    document.getElementById('delete-leave').addEventListener('click', handleDeleteLeave);

    // Header buttons
    elements.jumpTodayBtn.addEventListener('click', jumpToToday);
    elements.settingsBtn.addEventListener('click', openSettings);
    elements.generatePlanBtn.addEventListener('click', generatePlan);

    // Plan modal
    document.getElementById('close-plan').addEventListener('click', closePlanModal);
    document.getElementById('copy-message').addEventListener('click', copyMessage);
    document.getElementById('export-csv').addEventListener('click', exportCSV);

    // Undo
    document.getElementById('undo-btn').addEventListener('click', undoLastAction);

    // Calendar drag selection
    elements.calendar.addEventListener('mousedown', handleCalendarMouseDown);
    document.addEventListener('mousemove', handleCalendarMouseMove);
    document.addEventListener('mouseup', handleCalendarMouseUp);

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyDown);
}

// =============================================================================
// State Management (localStorage)
// =============================================================================

const STORAGE_KEY = 'leavewise_data';

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
        try {
            const data = JSON.parse(saved);
            state.config = data.config;
            state.leaveBlocks = data.leaveBlocks || [];

            // Show app and render
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

    // Pre-fill with existing config if available
    if (state.config) {
        document.getElementById('allowance').value = state.config.allowance;
        document.getElementById('year').value = state.config.year;
        document.getElementById('region').value = state.config.region;

        // Reset working days checkboxes
        document.querySelectorAll('input[name="workday"]').forEach(cb => {
            cb.checked = state.config.workingDays.includes(parseInt(cb.value));
        });
    }
}

function showApp() {
    elements.setupOverlay.classList.add('hidden');
    elements.app.classList.remove('hidden');

    elements.yearDisplay.textContent = state.config.year;

    renderCalendar();
    updateSummary();
}

// =============================================================================
// Setup Form Handling
// =============================================================================

function handleSetupSubmit(e) {
    e.preventDefault();

    const allowance = parseInt(document.getElementById('allowance').value);
    const year = parseInt(document.getElementById('year').value);
    const region = document.getElementById('region').value;

    // Get working days
    const workingDays = [];
    document.querySelectorAll('input[name="workday"]:checked').forEach(cb => {
        workingDays.push(parseInt(cb.value));
    });

    if (workingDays.length === 0) {
        alert('Please select at least one working day');
        return;
    }

    state.config = { allowance, year, region, workingDays };
    saveState();
    showApp();
}

function openSettings() {
    showSetup();
}

// =============================================================================
// Calendar Rendering
// =============================================================================

const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function renderCalendar() {
    elements.calendar.innerHTML = '';

    const year = state.config.year;
    const today = new Date();
    const todayStr = formatDate(today);

    // Get bank holidays for this year and region
    const bankHolidays = getBankHolidays();

    // Render each month
    for (let month = 0; month < 12; month++) {
        const monthSection = createMonthSection(year, month, todayStr, bankHolidays);
        elements.calendar.appendChild(monthSection);
    }
}

function createMonthSection(year, month, todayStr, bankHolidays) {
    const section = document.createElement('div');
    section.className = 'month-section';
    section.id = `month-${month}`;

    // Header
    const header = document.createElement('div');
    header.className = 'month-header';

    const monthName = document.createElement('span');
    monthName.className = 'month-name';
    monthName.textContent = MONTH_NAMES[month];

    header.appendChild(monthName);
    section.appendChild(header);

    // Weekday labels
    const weekdayHeader = document.createElement('div');
    weekdayHeader.className = 'weekday-header';
    DAY_NAMES.forEach(day => {
        const label = document.createElement('span');
        label.className = 'weekday-label';
        label.textContent = day;
        weekdayHeader.appendChild(label);
    });
    section.appendChild(weekdayHeader);

    // Days grid
    const daysGrid = document.createElement('div');
    daysGrid.className = 'days-grid';

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Get day of week for first day (0 = Sunday, convert to Monday = 0)
    let startDayOfWeek = firstDay.getDay();
    startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1; // Convert to Mon = 0

    // Empty tiles for days before first day of month
    for (let i = 0; i < startDayOfWeek; i++) {
        const emptyTile = document.createElement('div');
        emptyTile.className = 'day-tile empty';
        emptyTile.innerHTML = '<span class="day-number"></span>';
        daysGrid.appendChild(emptyTile);
    }

    // Day tiles
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        const dateStr = formatDate(date);
        const dayOfWeek = date.getDay(); // 0 = Sunday

        const tile = document.createElement('div');
        tile.className = 'day-tile';
        tile.dataset.date = dateStr;

        // Check if weekend (Saturday = 6, Sunday = 0)
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        if (isWeekend) {
            tile.classList.add('weekend');
        }

        // Check if non-working day (workingDays uses JS convention: 0=Sun, 1=Mon, etc.)
        if (!state.config.workingDays.includes(dayOfWeek)) {
            tile.classList.add('non-working');
        }

        // Check if today
        if (dateStr === todayStr) {
            tile.classList.add('today');
        }

        // Check if bank holiday
        if (bankHolidays.includes(dateStr)) {
            tile.classList.add('bank-holiday');
        }

        // Check if has leave
        const leaveBlock = getLeaveBlockForDate(dateStr);
        if (leaveBlock) {
            applyLeaveStyles(tile, dateStr, leaveBlock);
        }

        tile.innerHTML = `<span class="day-number">${day}</span>`;
        daysGrid.appendChild(tile);
    }

    section.appendChild(daysGrid);
    return section;
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
    }

    // Add edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'leave-edit-btn';
    editBtn.textContent = '...';
    editBtn.dataset.leaveId = leaveBlock.id;
    editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openEditModal(leaveBlock.id);
    });
    tile.appendChild(editBtn);
}

function getBankHolidays() {
    const { year, region } = state.config;
    return BANK_HOLIDAYS[region]?.[year] || [];
}

function getLeaveBlockForDate(dateStr) {
    return state.leaveBlocks.find(block => {
        return dateStr >= block.startDate && dateStr <= block.endDate;
    });
}

// =============================================================================
// Drag Selection
// =============================================================================

function handleCalendarMouseDown(e) {
    const tile = e.target.closest('.day-tile:not(.empty)');
    if (!tile || tile.classList.contains('has-leave')) return;

    const date = tile.dataset.date;
    if (!date) return;

    state.selection.active = true;
    state.selection.startDate = date;
    state.selection.endDate = date;

    updateSelectionVisuals();
    showSelectionFeedback();
}

function handleCalendarMouseMove(e) {
    if (!state.selection.active) return;

    const tile = document.elementFromPoint(e.clientX, e.clientY)?.closest('.day-tile:not(.empty)');
    if (!tile) return;

    const date = tile.dataset.date;
    if (!date) return;

    state.selection.endDate = date;
    updateSelectionVisuals();
    updateSelectionFeedback();
}

function handleCalendarMouseUp(e) {
    if (!state.selection.active) return;

    state.selection.active = false;

    // Check if we have a valid selection
    const { startDate, endDate } = normalizeSelection();

    if (startDate && endDate) {
        // Check for overlaps
        if (hasOverlap(startDate, endDate)) {
            alert('This selection overlaps with existing leave. Please choose different dates.');
            clearSelection();
            return;
        }

        // Show label modal
        showLabelModal(startDate, endDate);
    } else {
        clearSelection();
    }
}

function normalizeSelection() {
    let { startDate, endDate } = state.selection;

    if (!startDate || !endDate) return { startDate: null, endDate: null };

    // Ensure start <= end
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
    // Clear previous selection styles
    document.querySelectorAll('.day-tile.selecting, .day-tile.selection-start, .day-tile.selection-end').forEach(tile => {
        tile.classList.remove('selecting', 'selection-start', 'selection-end');
    });

    const { startDate, endDate } = normalizeSelection();
    if (!startDate || !endDate) return;

    // Apply selection styles to all tiles in range
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

    const roi = calculateROI(startDate, endDate);

    elements.feedbackDays.textContent = `${roi.leaveDaysUsed} leave day${roi.leaveDaysUsed !== 1 ? 's' : ''}`;
    elements.feedbackTotal.textContent = `${roi.totalDaysOff} day${roi.totalDaysOff !== 1 ? 's' : ''} off`;
}

function hideSelectionFeedback() {
    elements.selectionFeedback.classList.add('hidden');
}

function clearSelection() {
    state.selection = { active: false, startDate: null, endDate: null };

    document.querySelectorAll('.day-tile.selecting, .day-tile.selection-start, .day-tile.selection-end').forEach(tile => {
        tile.classList.remove('selecting', 'selection-start', 'selection-end');
    });

    hideSelectionFeedback();
}

// =============================================================================
// ROI Calculation
// =============================================================================

function calculateROI(startDate, endDate) {
    const bankHolidays = getBankHolidays();
    const { workingDays } = state.config;

    let leaveDaysUsed = 0;
    let totalDaysOff = 0;

    const start = parseDate(startDate);
    const end = parseDate(endDate);

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dateStr = formatDate(d);
        const dayOfWeek = d.getDay(); // 0 = Sunday

        totalDaysOff++;

        // Check if this is a working day
        const isWorkingDay = workingDays.includes(dayOfWeek);
        const isBankHoliday = bankHolidays.includes(dateStr);

        // Only count as leave if it's a working day and not a bank holiday
        if (isWorkingDay && !isBankHoliday) {
            leaveDaysUsed++;
        }
    }

    return { leaveDaysUsed, totalDaysOff };
}

// =============================================================================
// Label Modal
// =============================================================================

function showLabelModal(startDate, endDate) {
    const roi = calculateROI(startDate, endDate);

    document.getElementById('label-summary').textContent =
        `${formatDateRange(startDate, endDate)} • ${roi.leaveDaysUsed} leave → ${roi.totalDaysOff} days off`;

    document.getElementById('leave-label').value = '';

    elements.labelOverlay.classList.remove('hidden');
    document.getElementById('leave-label').focus();
}

function handleLabelSubmit(e) {
    e.preventDefault();

    const label = document.getElementById('leave-label').value.trim();
    if (!label) return;

    const { startDate, endDate } = normalizeSelection();
    const roi = calculateROI(startDate, endDate);

    const leaveBlock = {
        id: generateId(),
        label,
        startDate,
        endDate,
        leaveDaysUsed: roi.leaveDaysUsed,
        totalDaysOff: roi.totalDaysOff,
    };

    state.leaveBlocks.push(leaveBlock);
    saveState();

    closeLabelModal();
    clearSelection();
    renderCalendar();
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
        `${formatDateRange(block.startDate, block.endDate)} • ${block.leaveDaysUsed} leave → ${block.totalDaysOff} days off`;

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
        // Save to undo stack
        const deleted = state.leaveBlocks[blockIndex];
        state.undoStack.push({ action: 'delete', block: { ...deleted } });

        // Remove
        state.leaveBlocks.splice(blockIndex, 1);
        saveState();
        renderCalendar();
        updateSummary();

        // Show undo toast
        showUndoToast();
    }

    closeEditModal();
}

// =============================================================================
// Undo Functionality
// =============================================================================

function showUndoToast() {
    elements.undoToast.classList.remove('hidden');

    // Auto-hide after 5 seconds
    setTimeout(() => {
        elements.undoToast.classList.add('hidden');
    }, 5000);
}

function undoLastAction() {
    const lastAction = state.undoStack.pop();

    if (lastAction && lastAction.action === 'delete') {
        state.leaveBlocks.push(lastAction.block);
        saveState();
        renderCalendar();
        updateSummary();
    }

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

    // Color code remaining
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

    // Sort blocks by date
    const sortedBlocks = [...state.leaveBlocks].sort((a, b) => a.startDate.localeCompare(b.startDate));

    // Build days list
    const daysList = document.getElementById('plan-days-list');
    daysList.innerHTML = '';

    sortedBlocks.forEach(block => {
        const div = document.createElement('div');
        div.className = 'plan-leave-block';

        const labelEl = document.createElement('div');
        labelEl.className = 'plan-leave-label';
        labelEl.textContent = block.label;

        const datesEl = document.createElement('div');
        datesEl.className = 'plan-leave-dates';
        datesEl.textContent = formatDateRangeFriendly(block.startDate, block.endDate);

        div.appendChild(labelEl);
        div.appendChild(datesEl);
        daysList.appendChild(div);
    });

    // Build message
    const message = generateManagerMessage(sortedBlocks);
    document.getElementById('plan-message').value = message;

    elements.planOverlay.classList.remove('hidden');
}

function generateManagerMessage(blocks) {
    const lines = ['Hi,', '', 'Would it be okay to book the following annual leave for the coming year:', ''];

    blocks.forEach(block => {
        const workingDays = getWorkingDaysInRange(block.startDate, block.endDate);
        if (workingDays.length > 0) {
            const start = workingDays[0];
            const end = workingDays[workingDays.length - 1];
            lines.push(`• ${formatDateFriendly(start)} – ${formatDateFriendly(end)} (${block.label})`);
        }
    });

    lines.push('', 'Thanks!');

    return lines.join('\n');
}

function getWorkingDaysInRange(startDate, endDate) {
    const bankHolidays = getBankHolidays();
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
    const message = document.getElementById('plan-message').value;
    navigator.clipboard.writeText(message).then(() => {
        const btn = document.getElementById('copy-message');
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = original, 2000);
    });
}

function exportCSV() {
    const rows = [['Label', 'Start Date', 'End Date', 'Leave Days', 'Total Days Off']];

    state.leaveBlocks.forEach(block => {
        rows.push([
            block.label,
            block.startDate,
            block.endDate,
            block.leaveDaysUsed,
            block.totalDaysOff
        ]);
    });

    const csv = rows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `leavewise-${state.config.year}.csv`;
    a.click();

    URL.revokeObjectURL(url);
}

// =============================================================================
// Navigation
// =============================================================================

function jumpToToday() {
    const today = new Date();
    const month = today.getMonth();

    const monthSection = document.getElementById(`month-${month}`);
    if (monthSection) {
        monthSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// =============================================================================
// Keyboard Shortcuts
// =============================================================================

function handleKeyDown(e) {
    // Escape to close modals
    if (e.key === 'Escape') {
        if (!elements.labelOverlay.classList.contains('hidden')) {
            cancelSelection();
        } else if (!elements.editOverlay.classList.contains('hidden')) {
            closeEditModal();
        } else if (!elements.planOverlay.classList.contains('hidden')) {
            closePlanModal();
        }
    }

    // Cmd/Ctrl + Z for undo
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

    const startStr = `${start.getDate()} ${MONTH_NAMES[start.getMonth()].slice(0, 3)}`;
    const endStr = `${end.getDate()} ${MONTH_NAMES[end.getMonth()].slice(0, 3)}`;

    if (startDate === endDate) {
        return startStr;
    }

    return `${startStr} – ${endStr}`;
}

function formatDateRangeFriendly(startDate, endDate) {
    const workingDays = getWorkingDaysInRange(startDate, endDate);

    if (workingDays.length === 0) {
        return 'No working days';
    }

    const start = parseDate(workingDays[0]);
    const end = parseDate(workingDays[workingDays.length - 1]);

    const startStr = formatDateFriendly(workingDays[0]);
    const endStr = formatDateFriendly(workingDays[workingDays.length - 1]);

    if (workingDays.length === 1) {
        return startStr;
    }

    return `${startStr} – ${endStr}`;
}

function formatDateFriendly(dateStr) {
    const date = parseDate(dateStr);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = dayNames[date.getDay()];
    const dayNum = date.getDate();
    const month = MONTH_NAMES[date.getMonth()].slice(0, 3);

    return `${day} ${dayNum} ${month}`;
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
