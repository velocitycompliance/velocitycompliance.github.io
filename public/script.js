// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ROI Calculator Logic
const shipmentVolumeInput = document.getElementById('shipmentVolume');
const complianceCostInput = document.getElementById('complianceCost');
const clearanceTimeInput = document.getElementById('clearanceTime');

const annualCostEl = document.getElementById('annualCost');
const annualSavingsEl = document.getElementById('annualSavings');
const daysShavedEl = document.getElementById('daysShaved');

function calculateROI() {
  const shipmentVolume = parseFloat(shipmentVolumeInput.value) || 0;
  const complianceCost = parseFloat(complianceCostInput.value) || 0;
  const clearanceTime = parseFloat(clearanceTimeInput.value) || 0;

  const annualComplianceCost = shipmentVolume * complianceCost;
  const potentialSavings = annualComplianceCost * 0.63; // 63%
  const daysShaved = clearanceTime * 0.63;

  annualCostEl.textContent = '€' + annualComplianceCost.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  annualSavingsEl.textContent = '€' + potentialSavings.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  daysShavedEl.textContent = daysShaved.toFixed(1) + ' days';
}

// Listen for input changes to recalc
[shipmentVolumeInput, complianceCostInput, clearanceTimeInput].forEach(input => {
  input.addEventListener('input', calculateROI);
});

// Modal Logic
function openModal() {
  document.getElementById('modalOverlay').classList.add('modal-show');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('modal-show');
}

// Waitlist Signup Logic
function handleSignup(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;

  // If you're using PostHog, ensure it's loaded in <head>.
  // Otherwise, comment this out or replace with your own logic.
  posthog.capture('waitlist_signup', { email: email });

  alert('Thanks for joining!');
  closeModal();
}
