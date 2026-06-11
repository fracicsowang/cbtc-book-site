import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

import matplotlib.pyplot as plt

def make_chart(out_path: str) -> None:
    # Data extracted from the article context
    categories = ['Capacity', 'O&M Savings', 'Safety', 'Ridership Uplift', 'Environmental', 'Residual']
    proportions = [55, 13, 10, 9, 3, 10]  # Percentages from article context
    total_benefits = 100  # Total percentage for stacked bar

    # Brand colors
    NAVY = "#0A1628"
    AMBER = "#D4A84B"
    CREAM = "#F4EFE6"
    CHAR = "#1A1A1A"

    # Create figure and axis
    fig, ax = plt.subplots(figsize=(10, 5.5), dpi=140)
    fig.patch.set_facecolor(CREAM)

    # Plotting the stacked bar chart
    ax.bar(categories, proportions, color=NAVY, edgecolor=AMBER)

    # Title and labels
    ax.set_title('Benefit Composition by Category for Representative Brownfield CBTC BCA', fontsize=14, fontweight='bold', color=NAVY)
    ax.set_xlabel('Benefit Categories', fontsize=12, color=NAVY)
    ax.set_ylabel('Percentage of Total Benefits', fontsize=12, color=NAVY)

    # Gridlines
    ax.yaxis.grid(True, linestyle='--', linewidth=0.7, color=CHAR, alpha=0.7)

    # Set background color
    ax.set_facecolor(CREAM)

    # Tight layout
    plt.tight_layout()

    # Save the figure
    plt.savefig(out_path, facecolor=CREAM, bbox_inches='tight')
    plt.close()

import sys
if __name__ == '__main__':
    make_chart(sys.argv[1])
