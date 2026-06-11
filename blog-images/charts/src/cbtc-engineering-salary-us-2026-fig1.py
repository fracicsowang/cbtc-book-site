import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

import matplotlib.pyplot as plt

def make_chart(out_path: str) -> None:
    # Data extracted from the article context
    categories = ['Junior', 'Mid-Career', 'Senior']
    nyc_salaries = [(75000, 110000), (115000, 160000), (160000, 230000)]
    sf_salaries = [(75000, 110000), (115000, 160000), (160000, 230000)]
    dc_salaries = [(75000, 110000), (115000, 160000), (160000, 230000)]
    atl_salaries = [(67500, 99000), (103500, 144000), (144000, 207000)]  # 10% lower for Atlanta

    # Set up the figure and axes
    fig, ax = plt.subplots(figsize=(10, 5.5), dpi=140)
    ax.set_facecolor("#F4EFE6")

    # Define bar width and positions
    bar_width = 0.2
    index = range(len(categories))

    # Plot each metro's salary range
    for i, (salaries, label) in enumerate(zip(
            [nyc_salaries, sf_salaries, dc_salaries, atl_salaries],
            ['NYC', 'San Francisco', 'Washington DC', 'Atlanta'])):
        lower = [s[0] for s in salaries]
        upper = [s[1] for s in salaries]
        ax.bar([p + i * bar_width for p in index], 
               [u - l for l, u in zip(lower, upper)], 
               bar_width, 
               bottom=lower, 
               label=label, 
               color="#0A1628", 
               edgecolor="#D4A84B")

    # Customize the plot
    ax.set_title('2026 CBTC Engineering Base Salary Ranges by Experience and Metro', color="#0A1628", fontweight='bold')
    ax.set_xlabel('Experience Level', color="#0A1628")
    ax.set_ylabel('Base Salary (USD)', color="#0A1628")
    ax.set_xticks([p + 1.5 * bar_width for p in index])
    ax.set_xticklabels(categories)
    ax.legend(title='Metro Area', loc='upper left', bbox_to_anchor=(1, 1), facecolor="#F4EFE6")
    ax.grid(True, which='major', axis='y', linestyle='--', linewidth=0.5, color="#D4A84B", alpha=0.7)

    # Apply tight layout and save the figure
    plt.tight_layout()
    plt.savefig(out_path, facecolor="#F4EFE6", bbox_inches='tight')
    plt.close()

import sys
if __name__ == '__main__':
    make_chart(sys.argv[1])
