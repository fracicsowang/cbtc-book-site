import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

import matplotlib.pyplot as plt
import matplotlib.patches as patches

def make_chart(out_path: str) -> None:
    # Define the data for the headway demonstration timeline
    days = list(range(1, 91))  # 90-day demonstration window
    tphpd = [24 + (i % 6) for i in days]  # Illustrative daily TPHPD measurements

    # Define colors
    NAVY = "#0A1628"
    AMBER = "#D4A84B"
    CREAM = "#F4EFE6"
    CHAR = "#1A1A1A"

    # Create the plot
    plt.figure(figsize=(10, 5.5), dpi=140)
    plt.plot(days, tphpd, color=NAVY, marker='o', markersize=4, markerfacecolor=AMBER, label='TPHPD')

    # Add a horizontal line for the target TPHPD (illustrative)
    plt.axhline(y=24, color=AMBER, linestyle='--', linewidth=1.5, label='Target TPHPD')

    # Title and labels
    plt.title('Headway Demonstration Timeline (Illustrative)', fontsize=14, color=NAVY, fontweight='bold')
    plt.xlabel('Day of Demonstration', fontsize=12, color=CHAR)
    plt.ylabel('Trains Per Hour Per Direction (TPHPD)', fontsize=12, color=CHAR)

    # Grid and legend
    plt.grid(True, linestyle='--', linewidth=0.5, color=CHAR, alpha=0.3)
    plt.legend(loc='upper right', fontsize=10)

    # Set background color
    plt.gca().set_facecolor(CREAM)
    plt.gcf().set_facecolor(CREAM)

    # Adjust layout
    plt.tight_layout()

    # Save the figure
    plt.savefig(out_path, facecolor=CREAM, bbox_inches='tight')
    plt.close()

import sys
if __name__ == '__main__':
    make_chart(sys.argv[1])
