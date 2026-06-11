import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

import matplotlib.pyplot as plt
import numpy as np

def make_chart(out_path: str) -> None:
    # Data extracted from the article context
    categories = [
        "Initial Procurement",
        "Refresh Procurement",
        "Spares & Support",
        "Cross-Line Expansion",
        "Operational Embedding"
    ]
    # Approximate / illustrative values based on article context
    values = [15, 10, 12, 25, 8]  # percentages

    # Colors
    NAVY = "#0A1628"
    AMBER = "#D4A84B"
    CREAM = "#F4EFE6"
    CHAR = "#1A1A1A"

    # Create the figure and axis
    fig, ax = plt.subplots(figsize=(10, 5.5), dpi=140)
    fig.patch.set_facecolor(CREAM)
    ax.set_facecolor(CREAM)

    # Create the stacked bar chart
    ax.bar(categories, values, color=NAVY, edgecolor=AMBER)

    # Title and labels
    ax.set_title("CBTC Vendor Lock-In Cost Across 30-Year Asset Life", fontsize=14, fontweight='bold', color=NAVY)
    ax.set_xlabel("Cost Components", fontsize=12, color=CHAR)
    ax.set_ylabel("Percentage of Total Cost (%)", fontsize=12, color=CHAR)

    # Gridlines
    ax.yaxis.grid(True, linestyle='--', linewidth=0.7, color=AMBER, alpha=0.7)

    # Caption-like annotation
    plt.figtext(0.5, -0.1, "Lock-in cost is the sum of five recurring premiums across a 30-year asset life. Values are approximate / illustrative.", 
                wrap=True, horizontalalignment='center', fontsize=10, color=CHAR)

    # Layout and save
    plt.tight_layout()
    plt.savefig(out_path, facecolor=CREAM, bbox_inches='tight')
    plt.close()

import sys
if __name__ == '__main__':
    make_chart(sys.argv[1])
