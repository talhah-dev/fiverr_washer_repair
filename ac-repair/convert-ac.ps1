function Replace-InFile {
  param([string]$Path,[array]$Pairs)
  if (!(Test-Path -LiteralPath $Path)) { return }
  $content = Get-Content -LiteralPath $Path -Raw
  foreach ($pair in $Pairs) { $content = $content.Replace($pair[0], $pair[1]) }
  Set-Content -LiteralPath $Path -Value $content -NoNewline
}

Replace-InFile 'index.html' @(
  @('No hot water at home?','AC trouble at home?'),
  @('Fast, dependable ac repair.','Fast, dependable AC repair.'),
  @('From no hot water and active leaks to loud tank noises, ignition trouble, and acs that will not turn on, we','From weak cooling and active leaks to loud system noises, thermostat trouble, and AC units that will not turn on, we'),
  @('inspect the system carefully, explain the repair clearly, and help restore reliable hot water without the guesswork.','inspect the system carefully, explain the repair clearly, and help restore reliable cooling without the guesswork.'),
  @('Common ac problems','Common AC problems'),
  @('Tank, tankless &amp; hybrid ac service','Central air, split-system &amp; home AC service'),
  @('Call Now for AC Repair','Call Now for AC Repair'),
  @('No hot water','AC not cooling'),
  @('AC leaking','AC leaking water'),
  @('AC making noise','AC making noise'),
  @('Why is my ac not making hot water?','Why is my AC not cooling properly?'),
  @('Why is my ac leaking?','Why is my AC leaking water?'),
  @('Why is my ac making strange noises?','Why is my AC making strange noises?'),
  @('Little to no hot water, temperature drops, or water that never gets hot enough.','Weak airflow, warm air from vents, or cooling that never reaches the set temperature.'),
  @('Get your hot water back <span class="text-[#4a3c77]">today</span>','Get your AC working again <span class="text-[#4a3c77]">today</span>'),
  @('placeholder="Example: no hot water, tank is leaking, ac is making noise, or it will not turn on..."','placeholder="Example: AC is not cooling, leaking water, making noise, or will not turn on..."'),
  @('Our ac stopped producing hot water. They found the issue fast, explained','Our AC stopped cooling properly. They found the issue fast, explained'),
  @('the ac has been running great since.','the AC has been running great since.')
)

Replace-InFile 'about.html' @(
  @('reliable hot water performance','reliable cooling performance'),
  @('Verified hot water performance','Verified cooling performance'),
  @('Tank and tankless ac diagnostics','Residential AC diagnostics'),
  @('If your ac has no hot water, is leaking, will not turn on, or is making unusual noise, we will keep it straightforward: what is','If your AC is not cooling, is leaking water, will not turn on, or is making unusual noise, we will keep it straightforward: what is')
)

Replace-InFile 'contact.html' @(
  @('Whether there is no hot water, the tank is leaking, the unit is making noise, or it will not turn on, share what you are','Whether the AC is not cooling, leaking water, making noise, or will not turn on, share what you are'),
  @('value="ac-not-cooling">No hot water</option>','value="ac-not-cooling">AC not cooling</option>'),
  @('value="ac-leaking-water">AC leaking</option>','value="ac-leaking-water">AC leaking water</option>'),
  @('value="noisy-ac">AC smells like gas</option>','value="noisy-ac">AC making noise</option>'),
  @('placeholder="Example: no hot water, tank leaking, rumbling noise, or ac won''t turn on"','placeholder="Example: AC is not cooling, leaking water, making noise, or won''t turn on"'),
  @('Why is my ac not making hot water  -  what causes this?','Why is my AC not cooling  -  what causes this?'),
  @('My ac is leaking  -  what is usually','My AC is leaking water  -  what is usually'),
  @('Leaks can come from the tank, a pressure valve issue, loose fittings, or water connections that need attention.','Leaks can come from a clogged drain line, frozen coil, loose connection, or condensation problem that needs attention.')
)

Replace-InFile 'faq.html' @(
  @('Real ac solutions.','Real AC solutions.'),
  @('Browse by category or search a symptom like no hot water, leaking, making noise, or','Browse by category or search a symptom like not cooling, leaking water, making noise, or'),
  @('placeholder="Search: no hot water, leaking tank, ac making noise, pilot issue, ac won''t turn on..."','placeholder="Search: not cooling, leaking water, making noise, thermostat issue, AC won''t turn on..."'),
  @('No hot water','AC not cooling'),
  @('AC leaking','AC leaking water'),
  @('Share the symptom, when it started, whether there is no hot water, a leak, unusual noise, or an error code, and the ac brand or model if you have it.','Share the symptom, when it started, whether the AC is not cooling, leaking water, making noise, or showing an error code, and the AC brand or model if you have it.'),
  @('Why is my ac not making hot water?','Why is my AC not cooling properly?'),
  @('A failed heating element, thermostat issue, ignition problem, or sediment buildup can stop a ac from producing hot water properly.','A refrigerant issue, dirty coil, capacitor fault, thermostat problem, or airflow restriction can stop an AC from cooling properly.'),
  @('Why is my ac leaking?','Why is my AC leaking water?'),
  @('Sediment buildup, pressure changes, or worn internal parts can cause popping, rumbling, or other unusual ac noise.','Motor issues, loose parts, fan trouble, or compressor wear can cause unusual AC noise.'),
  @('Do I need to clear space around the ac before service?','Do I need to clear space around the AC before service?'),
  @('Is it safe to keep using a ac that is leaking or overheating?','Is it safe to keep using an AC that is leaking or overheating?')
)

Replace-InFile 'docs/javascript/Footer.js' @(
  @('Professional ac repair with careful diagnosis, clear estimates, and reliable in-home service.','Professional AC repair with careful diagnosis, clear estimates, and reliable in-home service.'),
  @('No hot water','AC not cooling'),
  @('AC leaking','AC leaking water'),
  @('Simple maintenance updates to help keep your ac running safely and delivering reliable hot water.','Simple maintenance updates to help keep your AC running efficiently and delivering reliable cooling.')
)

Replace-InFile 'docs/javascript/Navbar.js' @(
  @('No hot water','AC not cooling'),
  @('AC leaking','AC leaking water'),
  @('Choose a ac service or book a repair visit.','Choose an AC service or book a repair visit.'),
  @('Tank, thermostat, and heating checks','Coil, refrigerant, and airflow checks'),
  @('Leak source, valve, and connection checks','Drain line, coil, and condensation checks'),
  @('Power, ignition, and control checks','Power, thermostat, and control checks'),
  @('Tank noise, pressure, and sediment checks','Fan, motor, and vibration checks')
)

Replace-InFile 'ac-not-cooling.html' @(
  @('No hot water?','AC not cooling?'),
  @('No hot water repair','AC not cooling repair'),
  @('No-hot-water problems can come from a failed heating element, thermostat issue, ignition fault, or','No-cooling problems can come from low refrigerant, a bad capacitor, thermostat trouble, or'),
  @('Failed heating element or thermostat','Failed capacitor or thermostat'),
  @('A weak heating element, failing thermostat, or ignition issue can leave the ac running without producing enough hot water','A weak capacitor, failing contactor, low refrigerant, or thermostat issue can leave the AC running without cooling properly'),
  @('Let us know if the water turns lukewarm, runs cold quickly, or','Let us know if the air feels warm, cooling drops quickly, or'),
  @('how long hot water lasts, and if the unit tries to restart. That helps us narrow the likely fault','how long the AC runs before losing cooling, and if the unit tries to restart. That helps us narrow the likely fault'),
  @('We diagnose why your ac is not making hot water and fix the real cause with clear estimates and clean in-home service.','We diagnose why your AC is not cooling and fix the real cause with clear estimates and clean in-home service.'),
  @('the element, thermostat, ignition, and controls','the refrigerant circuit, capacitor, thermostat, and controls')
)

Replace-InFile 'ac-leaking-water.html' @(
  @('AC leaking?','AC leaking water?'),
  @('find the leak and restore safe, reliable operation.','find the leak and restore clean, reliable operation.'),
  @('If your ac is leaking from the tank, fittings, pressure valve, or supply connections, we inspect the source carefully and repair the real issue.','If your AC is leaking from the indoor unit, drain line, pan, or nearby connections, we inspect the source carefully and repair the real issue.'),
  @('starts leaking','leaks water'),
  @('AC leak repair service','AC leak repair service'),
  @('Tank fittings and valve connections','Drain line and condensation connections'),
  @('If a valve, fitting, or the tank itself fails, the ac can start leaking during normal operation.','If the drain line clogs, the pan cracks, or the coil freezes, the AC can start leaking water during normal operation.'),
  @('Pressure relief valve and water connections','Drain pan and condensate system'),
  @('Loose fittings, valve trouble, or tank wear can create active leaks that should be checked quickly.','Drain problems, frozen coils, or condensate issues can create active leaks that should be checked quickly.'),
  @('Drain line and surrounding water paths','Drain path and nearby water points'),
  @('We check the drain line, surrounding water paths, and connected fittings to find where the leak begins.','We check the drain line, pan, coil area, and nearby water paths to find where the leak begins.'),
  @('Thermostat and safety control checks','Cooling and condensate control checks'),
  @('Tell us where you notice the leak, whether it is steady or intermittent, and if it starts when the unit heats. That helps us narrow the likely cause quickly.','Tell us where you notice the leak, whether it is steady or intermittent, and if it starts when the AC runs. That helps us narrow the likely cause quickly.'),
  @('Failed valve or loose fitting','Clogged drain line or frozen coil'),
  @('A failed valve, loose fitting, or worn tank section can lead to leaking while the ac is running.','A clogged drain line, frozen coil, or cracked pan can lead to water leaking while the AC is running.'),
  @('Can a pressure valve cause a ac leak?','Can a clogged drain line cause an AC leak?'),
  @('Yes. A failing pressure valve can release water and make it look like the whole unit is leaking.','Yes. A clogged drain line can back water up and make it look like the whole unit is leaking.')
)

Replace-InFile 'ac-wont-turn-on.html' @(
  @('water heater won''t turn on','AC won''t turn on'),
  @('power-up repair','turn-on repair'),
  @('power-up problem','turn-on problem')
)

Replace-InFile 'ac-making-noise.html' @(
  @('AC making noise?','AC making noise?'),
  @('If your ac is popping, rumbling, hissing, or making other unusual sounds, we inspect the tank, heating components, and pressure controls to find the real source fast.','If your AC is buzzing, rattling, banging, or making other unusual sounds, we inspect the fan, motor, coils, and support parts to find the real source fast.'),
  @('the tank, heating area, and safety controls for the source of the noise.','the fan, motor, mounting points, and safety controls for the source of the noise.'),
  @('Sediment buildup or pressure issue','Motor wear or loose part'),
  @('Sediment or pressure issues can cause rumbling, knocking, or popping inside the tank.','Motor wear, loose panels, fan imbalance, or compressor issues can cause unusual AC noise.'),
  @('what the noise sounds like, when it starts, and whether hot water performance has changed. That helps us narrow the likely source faster.','what the noise sounds like, when it starts, and whether cooling performance has changed. That helps us narrow the likely source faster.')
)

Replace-InFile 'local-ac-repair.html' @(
  @('Local ac repair with fast diagnosis, clear estimates, and clean in-home service for no hot water, leaks, noise issues, startup faults, and control problems.','Local AC repair with fast diagnosis, clear estimates, and clean in-home service for weak cooling, leaks, noise issues, startup faults, and control problems.'),
  @('including no hot water, leaks, unusual noise, control faults, and acs that will not turn on.','including weak cooling, leaks, unusual noise, control faults, and AC units that will not turn on.'),
  @('No hot water','AC not cooling'),
  @('Little to no hot water, short hot-water cycles, or water that never reaches the right temperature.','Weak airflow, warm vents, short cooling cycles, or air that never gets cold enough.'),
  @('AC leaking','AC leaking water'),
  @('Tank leaks, valve leaks, or water around the base all need a proper source check.','Drain line leaks, frozen coils, or water around the indoor unit all need a proper source check.'),
  @('Tell us the main symptom, whether there is a leak or unusual noise, and if the ac still makes any hot water. That helps us prepare for the visit.','Tell us the main symptom, whether there is a leak or unusual noise, and if the AC still blows any cool air. That helps us prepare for the visit.')
)