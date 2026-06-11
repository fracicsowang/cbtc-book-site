import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

import matplotlib.pyplot as plt

def make_chart(out_path: str) -> None:
    # Data extracted from the article context
    years = [2010, 2015, 2020, 2025]
    china_route_km = [150, 750, 3500, 7200]
    china_lines = [9, 36, 90, 160]  # Approximate midpoints of given ranges
    us_route_km = [200, 320, 450, 510]
    us_lines = [3.5, 5.5, 6.5, 6.5]  # Approximate midpoints of given ranges

    # Brand colors
    NAVY = "#0A1628"
    AMBER = "#D4A84B"
    CREAM = "#F4EFE6"

    # Create the plot
    plt.figure(figsize=(10, 5.5), dpi=140)
    plt.plot(years, china_route_km, label='China Route-km', color=NAVY, marker='o')
    plt.plot(years, china_lines, label='China Lines', color=AMBER, marker='s')
    plt.plot(years, us_route_km, label='US Route-km', color=NAVY, linestyle='--', marker='^')
    plt.plot(years, us_lines, label='US Lines', color=AMBER, linestyle='--', marker='d')

    # Title and labels
    plt.title('Chinese Metro CBTC Cumulative Deployment 2002–2025\n(Approximate / Illustrative)', color=NAVY, fontweight='bold')
    plt.xlabel('Year', color=NAVY)
    plt.ylabel('Count / Route-km', color=NAVY)

    # Customize the plot
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.legend(loc='upper left')
    plt.gca().set_facecolor(CREAM)
    plt.xticks(years, color=NAVY)
    plt.yticks(color=NAVY)
    plt.tight_layout()

    # Save the plot
    plt.savefig(out_path, facecolor=CREAM, bbox_inches='tight')
    plt.close()

import sys
if __name__ == '__main__':
    make_chart(sys.argv[1])
