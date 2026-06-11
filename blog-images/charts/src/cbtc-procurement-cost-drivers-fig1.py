import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

import matplotlib.pyplot as plt

def make_chart(out_path: str) -> None:
    # Data extracted from the article context
    contractor_bid_percentage = 60  # lower bound of the contractor's bid as a percentage of total cost
    total_cost_percentage = 100  # total program cost as a percentage
    additional_costs_percentage = total_cost_percentage - contractor_bid_percentage

    # Labels and values for the stacked bar chart
    labels = ['Contractor Bid', 'Additional Costs']
    values = [contractor_bid_percentage, additional_costs_percentage]

    # Brand colors
    NAVY = "#0A1628"
    AMBER = "#D4A84B"
    CREAM = "#F4EFE6"

    # Create the figure and axis
    fig, ax = plt.subplots(figsize=(10, 5.5), dpi=140)
    fig.patch.set_facecolor(CREAM)
    ax.set_facecolor(CREAM)

    # Plot the stacked bar chart
    ax.bar(labels, values, color=[NAVY, AMBER])

    # Title and labels
    ax.set_title('Gap Between Contractor Sticker Price and Total Program Cost\non a Representative US Brownfield CBTC Project', color=NAVY, fontweight='bold')
    ax.set_ylabel('Percentage of Total Cost', color=NAVY)
    ax.set_xlabel('Cost Components', color=NAVY)

    # Add gridlines
    ax.yaxis.grid(True, color=NAVY, linestyle='--', linewidth=0.5)

    # Set axis label colors
    ax.tick_params(axis='x', colors=NAVY)
    ax.tick_params(axis='y', colors=NAVY)

    # Tight layout
    plt.tight_layout()

    # Save the figure
    plt.savefig(out_path, facecolor=CREAM, bbox_inches='tight')
    plt.close()

import sys
if __name__ == '__main__':
    make_chart(sys.argv[1])
